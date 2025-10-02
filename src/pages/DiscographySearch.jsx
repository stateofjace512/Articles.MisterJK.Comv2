import React from 'react';
import Navigation from '../components/Navigation';
import NoiseBackground from '../components/NoiseBackground';
import Footer from '../components/Footer';
import DiscographySearcher from '../components/DiscographySearcher';

export default function DiscographySearch() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <NoiseBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-4">
        <div className="w-full max-w-5xl mx-auto">
          <div className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[0_16px_40px_rgba(15,23,42,0.15)] ring-1 ring-black/5 p-6 md:p-10">
            <header className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-4">
                Discography Searcher
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Instantly filter across albums, singles, live recordings, and upcoming projects from The Nice Girls universe. Use the search to jump straight to a song or toggle filters to explore by era.
              </p>
            </header>

            <DiscographySearcher />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
