import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Filter, RefreshCw, Search, X } from 'lucide-react';
import { discographyEntries } from '../data/discography';

const INITIAL_BATCH = 5;

const formatReleaseLabel = (entry) => {
  if (!entry.releaseDate) {
    return entry.isUpcoming ? 'Coming soon' : 'Release date TBA';
  }

  const date = new Date(entry.releaseDate);
  if (Number.isNaN(date.getTime())) {
    return entry.releaseDate;
  }

  if (entry.isUpcoming) {
    return `Coming ${date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}`;
  }

  return date.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const normalizeText = (value) => value?.toString().toLowerCase() ?? '';

export default function DiscographySearcher() {
  const [query, setQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);

  const scrollContainerRef = useRef(null);
  const normalizedQuery = query.trim().toLowerCase();

  const typeOptions = useMemo(() => {
    return Array.from(new Set(discographyEntries.map((entry) => entry.type))).sort();
  }, []);

  const yearOptions = useMemo(() => {
    const years = new Set();
    discographyEntries.forEach((entry) => {
      if (entry.year) {
        years.add(entry.year);
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, []);

  const filteredResults = useMemo(() => {
    const results = discographyEntries.filter((entry) => {
      const matchesYear =
        selectedYear === 'all' || (entry.year && entry.year.toString() === selectedYear);

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(entry.type);

      const combined = [
        entry.title,
        entry.summary,
        entry.type,
        ...(entry.artists ?? []),
        ...(entry.tags ?? []),
        ...(entry.highlightTracks ?? []),
        entry.notes ?? ''
      ]
        .map(normalizeText)
        .join(' ');

      const matchesQuery = normalizedQuery === '' || combined.includes(normalizedQuery);

      return matchesYear && matchesType && matchesQuery;
    });

    results.sort((a, b) => {
      const aDate = new Date(a.releaseDate).getTime();
      const bDate = new Date(b.releaseDate).getTime();

      if (Number.isNaN(aDate) && Number.isNaN(bDate)) return 0;
      if (Number.isNaN(aDate)) return 1;
      if (Number.isNaN(bDate)) return -1;

      return sortOrder === 'newest' ? bDate - aDate : aDate - bDate;
    });

    return results;
  }, [normalizedQuery, selectedTypes, selectedYear, sortOrder]);

  const visibleItems = useMemo(
    () => filteredResults.slice(0, visibleCount),
    [filteredResults, visibleCount]
  );

  const shouldEnableScroll = visibleCount > INITIAL_BATCH && visibleItems.length > INITIAL_BATCH;
  const resultsMessage = useMemo(() => {
    if (filteredResults.length === 0) {
      return 'No releases match your filters yet.';
    }

    if (visibleItems.length === filteredResults.length) {
      return `Showing all ${filteredResults.length} releases.`;
    }

    return `Showing ${visibleItems.length} of ${filteredResults.length} releases.`;
  }, [filteredResults.length, visibleItems.length]);

  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [normalizedQuery, selectedTypes, selectedYear, sortOrder]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !shouldEnableScroll) return undefined;

    const handleWheel = (event) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

      if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
        event.preventDefault();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [shouldEnableScroll, visibleItems.length]);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((value) => value !== type) : [...prev, type]
    );
  };

  const resetFilters = () => {
    setQuery('');
    setSelectedTypes([]);
    setSelectedYear('all');
    setSortOrder('newest');
  };

  return (
    <section className="mt-8">
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search songs, releases, or keywords..."
              className="w-full rounded-xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 px-10 py-3 text-sm text-neutral-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_6px_16px_rgba(15,23,42,0.1)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 transition hover:text-neutral-700"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="discography-sort" className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Sort by
            </label>
            <select
              id="discography-sort"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              <Filter className="h-4 w-4" />
              Filter by type
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {typeOptions.map((type) => {
                const isActive = selectedTypes.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleType(type)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      isActive
                        ? 'border-blue-500 bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.35)]'
                        : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="discography-year" className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Year
            </label>
            <select
              id="discography-year"
              value={selectedYear}
              onChange={(event) => setSelectedYear(event.target.value)}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              <option value="all">All years</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {(selectedTypes.length > 0 || selectedYear !== 'all' || query) && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-800"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reset
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-sm text-neutral-600" aria-live="polite">
          {resultsMessage}
        </p>

        <div
          ref={scrollContainerRef}
          className={`mt-4 space-y-4 ${
            shouldEnableScroll
              ? 'max-h-[60vh] overflow-y-auto overscroll-contain pr-2 custom-scrollbar'
              : ''
          }`}
          aria-live="polite"
        >
          {visibleItems.length === 0 ? (
            <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50/70 px-6 py-12 text-center">
              <p className="text-lg font-semibold text-neutral-700">No releases found</p>
              <p className="mt-2 text-sm text-neutral-500">
                Try a different keyword or remove a filter to widen the search.
              </p>
            </div>
          ) : (
            visibleItems.map((entry) => (
              <article
                key={entry.id}
                className="group rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-neutral-900">{entry.title}</h3>
                      <span className="rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-neutral-600">
                        {entry.type}
                      </span>
                      {entry.isUpcoming && (
                        <span className="rounded-full border border-amber-300 bg-amber-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-700">
                          Upcoming
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm text-neutral-500">
                      {formatReleaseLabel(entry)}
                      {entry.runtime ? ` · ${entry.runtime}` : ''}
                    </p>

                    {entry.artists?.length ? (
                      <p className="mt-2 text-sm text-neutral-600">
                        <span className="font-semibold text-neutral-700">Artists:</span> {entry.artists.join(', ')}
                      </p>
                    ) : null}

                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                      {entry.summary}
                    </p>

                    {entry.highlightTracks?.length ? (
                      <p className="mt-3 text-sm text-neutral-600">
                        <span className="font-semibold text-neutral-700">Highlights:</span> {entry.highlightTracks.join(', ')}
                      </p>
                    ) : null}

                    {entry.notes ? (
                      <p className="mt-3 text-xs italic text-neutral-500">{entry.notes}</p>
                    ) : null}

                    {entry.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {entry.links?.length ? (
                    <div className="md:w-48">
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        Explore
                      </span>
                      <div className="mt-2 flex flex-col gap-2">
                        {entry.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-between rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-400 hover:text-blue-700"
                          >
                            {link.label}
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            ))
          )}
        </div>

        {visibleCount < filteredResults.length && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + INITIAL_BATCH, filteredResults.length))}
              className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-[0_8px_18px_rgba(15,23,42,0.1)] transition hover:-translate-y-0.5 hover:border-neutral-400"
            >
              Show more results
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
