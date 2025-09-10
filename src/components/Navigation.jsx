"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const initialDark = savedTheme ? savedTheme === "dark" : mql.matches;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark-mode", initialDark);

    const handleChange = (e) => {
      if (!savedTheme) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark-mode", e.matches);
      }
    };

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

// Lock body scroll when mobile menu is open
useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}, [isMobileMenuOpen]);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark-mode", newTheme);
    setThemeCookie(newTheme ? "dark" : "light");
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation links data
  const navLinks = [
    { href: "https://misterjk.com", label: "Home" },
    { href: "https://misterjk.com/link", label: "Discover" },
    { href: "https://misterjk.com/bts", label: "BTS" },
    { href: "https://lyrics.misterjk.com", label: "Lyrics" },
    { href: "/", label: "Blog" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b pointer-events-auto transition-all duration-300 ${
        isDark 
          ? 'bg-[#101010] border-[#1a1a1a] text-white shadow-lg' 
          : 'bg-white/95 border-gray-200/60 text-gray-900 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo/Favicon - Full height with padding */}
            <div className="flex-shrink-0 mr-2 h-full flex items-center">
              <img
                src="/1favicon.png"
                alt="MRJK"
                className="h-full w-auto cursor-pointer py-1"
                loading="eager"
                decoding="async"
                onClick={toggleTheme}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 overflow-x-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-base font-medium rainbow-text-hover whitespace-nowrap flex-shrink-0 relative group transition-all duration-200 ${
                    isDark ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-gray-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-3 overflow-x-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rainbow-text-hover whitespace-nowrap flex-shrink-0 ${
                    isDark ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-gray-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button - Arrow Left with proper skeuomorphic styling */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                  isDark 
                    ? 'bg-gray-800/60 hover:bg-gray-700/70 text-white border border-gray-700/30' 
                    : 'bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-px'
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-label="Open navigation menu"
              >
                <ChevronLeft className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Sliding from Left */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>

        
        {/* Full Screen Sliding Menu Panel */}
        <div className={`absolute inset-y-0 right-0 w-full shadow-2xl transform transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isDark 
            ? 'bg-[#0a0a0a] text-white border-l border-[#1a1a1a]'
            : 'bg-[#fdfdfd] text-[#111] border-l border-[#d1d1d1]'
        }`}>

          
          {/* Header with Close Button */}
          <div className={`flex items-center justify-between p-6 border-b ${
            isDark ? 'border-[#1a1a1a] bg-[#101010]' : 'border-[#d1d1d1] bg-[#ffffff]'
          }`}>
            <div className="flex items-center space-x-3">
              <img
                src="/1favicon.png"
                alt="MRJK"
                className="h-8 w-auto"
                loading="eager"
                decoding="async"
              />
            </div>
            
            {/* Close Button - Arrow Right */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500/60 ${
                isDark 
                  ? 'bg-gray-800/60 hover:bg-gray-700/70 text-white border border-gray-700/40' 
                  : 'border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 hover:shadow-lg hover:-translate-y-0.5'
              }`}
              aria-label="Close navigation menu"
            >
              <ChevronRight className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" />
            </button>
          </div>
          
          {/* Menu content */}
          <div className="p-6 space-y-2 mt-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-6 py-5 text-xl font-medium rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] relative overflow-hidden group ${isMobileMenuOpen ? 'animate-slide-in' : ''} ${
                  isDark 
                    ? 'hover:bg-gray-800/70 hover:text-gray-100 border border-transparent hover:border-gray-700/30' 
                    : 'border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-900 hover:shadow-lg hover:-translate-y-0.5'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Hover shimmer effect */}
                <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
                  isDark 
                    ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-white/50 to-transparent'
                }`}></div>
                
                <span className="relative z-10 flex items-center justify-between">
                  {link.label}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        /* Custom scrollbar for overflow areas */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #a855f7, #ec4899, #ef4444);
          border-radius: 2px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
} 
