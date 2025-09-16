import React from "react";

export default function PrivacyPolicy({ setModal }) {
  return (
    <div className="text-sm text-neutral-700 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Privacy Policy</h2>
        <span className="text-xs text-neutral-500 mr-8">Updated September 12, 2025</span>
      </div>

      <p>
        <strong>MRJK (MISTER JK or MISTER JAKE) RECORDS</strong>, known forth as MRJK, respects your
        privacy while also being clear about what we collect and how we use it. By entering and using
        this site, you accept this Privacy Policy.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Information We Collect</h3>
      <p>
        We collect <strong>all data reasonably necessary</strong> to operate, secure, and improve this
        website, limited to what does not require explicit consent under applicable law. This may
        include:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Automatically collected:</strong> IP address, device/browser type, operating system,
          session headers, approximate location (state, city, postal code), connection latency (ping),
          cookies, and local storage.
        </li>
        <li>
          <strong>Voluntarily provided:</strong> contact form submissions, booking requests, email
          inquiries, or any details you choose to share.
        </li>
        <li>
          <strong>Third-party embedded content:</strong> streaming platforms (Spotify, Apple Music,
          YouTube, etc.) may collect information under their own privacy policies.
        </li>
      </ul>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Purpose of Collection</h3>
      <p>We use this data to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Support site functionality (dark mode, playback, page state).</li>
        <li>Provide security, fraud prevention, and DDoS protection.</li>
        <li>Monitor performance and analytics.</li>
        <li>Respond to inquiries, bookings, or communications.</li>
        <li>Protect MRJK content from unauthorized use.</li>
      </ul>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Security and DDoS Protection</h3>
      <p>
        For security reasons, MRJK automatically tracks IP address, approximate location (state, city,
        postal code), connection latency (ping), and device/session data. This information is used
        solely to protect the site from denial-of-service (DDoS) attacks, abuse, and unauthorized
        access. It is not sold, rented, or used for advertising. Security logs are temporary and
        purged after use.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Cookies &amp; Tracking</h3>
      <p>
        We use cookies and local storage to support theme preferences (dark mode), listening/player
        state, page/modal states, and performance. Non-essential cookies may require consent depending
        on your region. See our{" "}
        <span
          role="button"
          onClick={() => setModal("cookies")}
          className="cursor-pointer underline text-blue-600 hover:text-blue-800"
        >
          Cookies Policy
        </span>{" "}
        for details.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">User Rights</h3>
      <p>
        Depending on your location (GDPR, CCPA, LGPD), you may have rights to access, correct, delete,
        or restrict your data. Requests can be made through MRJK's official contact channels.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Age &amp; Explicit Content</h3>
      <p>
        MRJK recommends this site for users 16+. We cannot be held responsible if under-16 users access
        it. Lyrics and creative works may contain sexual or explicit content. By entering, you accept
        the same risks as platforms like YouTube.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Children&apos;s Privacy</h3>
      <p>
        This site is not directed at children under 13 (or 16 where stricter laws apply). MRJK does not
        knowingly collect data from minors. If we become aware, such data will be deleted.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">International Users</h3>
      <p>
        MRJK is operated from the United States. If you access it from outside the U.S., your
        information may be transferred and processed in jurisdictions that may not provide the same
        protections as your country.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Data Retention</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Cookies/local storage: 365 days.</li>
        <li>Security logs: temporary, deleted regularly.</li>
        <li>Contact/booking data: stored as long as needed to respond, then archived or deleted.</li>
      </ul>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">Changes to this Policy</h3>
      <p>
        This Privacy Policy may be updated from time to time. The "Effective Date" above will always
        reflect the most recent version.
      </p>
    </div>
  );
}
