import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [open, setOpen] = useState(false);

  // --- helpers for cookies ---
  const setThemeCookie = (theme) => {
    document.cookie = `theme=${theme}; path=/; domain=.misterjk.com; max-age=31536000; SameSite=Lax; Secure`;
  };

  const getThemeCookie = () => {
    const match = document.cookie.match(/(?:^|; )theme=([^;]*)/);
    return match ? match[1] : null;
  };

  // Get current path
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Initialize theme
  useEffect(() => {
    const savedTheme = getThemeCookie();
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark-mode", shouldBeDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (!savedTheme) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark-mode", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Toggle theme + write cookie
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark-mode", newTheme);
    setThemeCookie(newTheme ? "dark" : "light");
  };

  const getNavLinkClasses = () => {
    const baseClasses =
      "px-3 py-2 text-sm font-medium transition-colors duration-200";
    return `${baseClasses} text-gray-900 rainbow-text-hover`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/40 pointer-events-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo toggles theme */}
          <img
            src="/favicon.png"
            alt="MRJK"
            className="h-16 w-16 object-contain cursor-pointer"
            loading="eager"
            decoding="async"
            onClick={toggleTheme}
          />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <a href="https://misterjk.com" className={getNavLinkClasses()}>
              Home
            </a>
            <a href="https://misterjk.com/link" className={getNavLinkClasses()}>
              Listen
            </a>
            <a href="https://misterjk.com/bts" className={getNavLinkClasses()}>
              BTS
            </a>

            {/* Dropdown for Lyrics */}
            <div className="relative group">
              <a
                href="https://lyrics.misterjk.com"
                className={`${getNavLinkClasses()} inline-flex items-center`}
              >
                Lyrics
              </a>
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-md rounded-md z-50">
                <a
                  href="https://poems.misterjk.com"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                >
                  Poems
                </a>
              </div>
            </div>

            <a href="/" className={getNavLinkClasses()}>
              Blog
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 z-60"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Fullscreen mobile overlay */}
      <div
        className={`fixed inset-0 bg-white/80 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center overflow-y-auto">
          <a
            href="https://misterjk.com"
            className="text-2xl font-semibold text-gray-900 hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="https://misterjk.com/link"
            className="text-2xl font-semibold text-gray-900 hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            Listen
          </a>
          <a
            href="https://misterjk.com/bts"
            className="text-2xl font-semibold text-gray-900 hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            BTS
          </a>
          <a
            href="https://lyrics.misterjk.com"
            className="text-2xl font-semibold text-gray-900 hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            Lyrics
          </a>
          <a
            href="https://poems.misterjk.com"
            className="ml-4 text-lg text-gray-700 hover:text-gray-500"
            onClick={() => setOpen(false)}
          >
            ↳ Poems
          </a>
          <a
            href="/"
            className="text-2xl font-semibold text-gray-900 hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
