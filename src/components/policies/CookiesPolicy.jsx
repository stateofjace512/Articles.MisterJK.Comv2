import React from "react";

export default function CookiesPolicy() {
  return (
    <div className="text-sm text-neutral-700 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Cookies Policy</h2>
        <span className="text-xs text-neutral-500 mr-8">Updated September 9, 2025</span>
      </div>

      <p>
        <strong>MRJK (MISTER JK or MISTER JAKE) RECORDS</strong>, known forth as MRJK, uses
        cookies to support the functionality and experience of this website.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">What are cookies?</h3>
      <p>
        Cookies are small text files that a website places on your device when you visit. They
        allow the site to "remember" certain information between visits, such as preferences or login
        states. Cookies are stored locally in your browser and may have an expiration period.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">How MRJK uses cookies</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Theme preferences</strong> (e.g., dark mode).
        </li>
        <li>
          <strong>Listening/player state</strong> (keeping track of playback).
        </li>
        <li>
          <strong>Page and modal states</strong> (open/closed sections, navigation).
        </li>
      </ul>
      <p>We do not use cookies for advertising or cross-site tracking.</p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Cookie duration</h3>
      <p>
        Cookies persist for 365 days unless cleared sooner in your browser. They are stored only on
        your device. MRJK does not have direct access to, nor the ability to retrieve or modify, the
        cookies stored on your browser.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Third-party cookies</h3>
      <p>
        Some pages may include embedded content (such as YouTube or streaming platforms). These
        services may set their own cookies under their respective privacy and cookie policies.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Managing cookies</h3>
      <p>
        You can disable or delete cookies at any time in your browser settings. Please note that
        certain site features may not function properly without them.
      </p>
    </div>
  );
}
