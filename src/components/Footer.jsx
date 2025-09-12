import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 px-4 py-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)] text-center space-y-4">
        {/* Policies / Links row */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-700">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="#none" className="hover:underline">
            Cookie Settings
          </a>
        </nav>

        {/* Divider line */}
        <div className="border-t border-neutral-300 w-full" />

        {/* Copyright row */}
        <p className="flex items-center justify-center gap-2 text-xs text-neutral-700 leading-relaxed">
          <img
            src={'/record_label.png'}
            alt="Record Label logo"
            className="h-4 w-auto inline-block"
          />
          © {year} Jake Robison Records. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
