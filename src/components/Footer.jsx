import React, { useState, useEffect } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [modal, setModal] = useState(null); // "privacy" | "terms" | "cookies"

  const openModal = (type) => {
    setModal(type);
  };

  // Lock/unlock body scroll when modal opens/closes
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modal]);

  return (
    <footer className="mt-10 px-4 py-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-6 py-5 shadow text-center space-y-4">
        {/* Policies / Links row */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-700">
          <a role="button" onClick={() => openModal("privacy")} className="cursor-pointer hover:underline">
            Privacy Policy
          </a>
          <a role="button" onClick={() => openModal("terms")} className="cursor-pointer hover:underline">
            Terms of Service
          </a>
          <a role="button" onClick={() => openModal("cookies")} className="cursor-pointer hover:underline">
            Cookie Settings
          </a>
        </nav>

        <div className="border-t border-neutral-300 w-full" />

        {/* Copyright row */}
        <p className="flex items-center justify-center gap-2 text-xs text-neutral-700 leading-relaxed">
          <img src="/record_label.png" alt="Record Label logo" className="h-4 w-auto inline-block" />
          © {year} Jake Robison Records. All rights reserved.
        </p>
      </div>

      {/* Modal overlay */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/50"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-lg w-full mx-4 rounded-2xl border border-neutral-300 
                       bg-gradient-to-b from-white to-neutral-100 
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_rgba(0,0,0,0.25)] 
                       p-6 text-left
                       max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close link */}
            <a
              role="button"
              onClick={() => setModal(null)}
              className="cursor-pointer absolute top-3 right-3 text-neutral-400 hover:text-neutral-700 text-lg"
            >
              ✕
            </a>

            {/* Modal content */}
            {modal === "privacy" && (
              <div className="text-sm text-neutral-700 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Privacy Policy</h2>
                  <span className="text-xs text-neutral-500 mr-8">Updated September 12, 2025</span>
                </div>
            
                <p>
                  <strong>MRJK (MISTER JK or MISTER JAKE) RECORDS</strong>, known forth as
                  MRJK, respects your privacy while also being clear about what we collect
                  and how we use it. By entering and using this site, you accept this
                  Privacy Policy.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Information We Collect</h3>
                <p>
                  We collect <strong>all data reasonably necessary</strong> to operate,
                  secure, and improve this website, limited to what does not require explicit
                  consent under applicable law. This may include:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Automatically collected:</strong> IP address, device/browser
                    type, operating system, session headers, approximate location (state,
                    city, postal code), connection latency (ping), cookies, and local
                    storage.
                  </li>
                  <li>
                    <strong>Voluntarily provided:</strong> contact form submissions, booking
                    requests, email inquiries, or any details you choose to share.
                  </li>
                  <li>
                    <strong>Third-party embedded content:</strong> streaming platforms
                    (Spotify, Apple Music, YouTube, etc.) may collect information under
                    their own privacy policies.
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
                  For security reasons, MRJK automatically tracks IP address, approximate
                  location (state, city, postal code), connection latency (ping), and
                  device/session data. This information is used solely to protect the site
                  from denial-of-service (DDoS) attacks, abuse, and unauthorized access. It
                  is not sold, rented, or used for advertising. Security logs are temporary
                  and purged after use.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Data Sharing</h3>
                <p>
                  MRJK does not sell or rent your data. We may share it with trusted service
                  providers (hosting, email, payments) only as needed to operate services.
                  Third-party embeds (Spotify, YouTube, etc.) may set cookies and collect
                  data under their own policies.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
             
                <h3 className="font-semibold">Cookies & Tracking</h3>
                <p>
                  We use cookies and local storage to support theme preferences (dark mode),
                  listening/player state, page/modal states, and performance. Non-essential
                  cookies may require consent depending on your region. See our{" "}
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
                  Depending on your location (GDPR, CCPA, LGPD), you may have rights to
                  access, correct, delete, or restrict your data. Requests can be made
                  through MRJK's official contact channels.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Age & Explicit Content</h3>
                <p>
                  MRJK recommends this site for users 16+. We cannot be held responsible if
                  under-16 users access it. Lyrics and creative works may contain sexual or
                  explicit content. By entering, you accept the same risks as platforms like
                  YouTube.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Children's Privacy</h3>
                <p>
                  This site is not directed at children under 13 (or 16 where stricter laws
                  apply). MRJK does not knowingly collect data from minors. If we become
                  aware, such data will be deleted.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">International Users</h3>
                <p>
                  MRJK is operated from the United States. If you access it from outside the
                  U.S., your information may be transferred and processed in jurisdictions
                  that may not provide the same protections as your country.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Data Retention</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cookies/local storage: 365 days.</li>
                  <li>Security logs: temporary, deleted regularly.</li>
                  <li>
                    Contact/booking data: stored as long as needed to respond, then archived
                    or deleted.
                  </li>
                </ul>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Changes to this Policy</h3>
                <p>
                  This Privacy Policy may be updated from time to time. The "Effective Date"
                  above will always reflect the most recent version.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
              </div>
            )}

            {modal === "terms" && (
              <div className="text-sm text-neutral-700 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Terms of Service</h2>
                  <span className="text-xs text-neutral-500 mr-8">Updated September 12, 2025</span>
                </div>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">1. Eligibility</h3>
                <p>
                  Our site is recommended for users 16 and older. Some content may include
                  mature themes. Parents and guardians should use discretion when allowing
                  minors to access this site.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">2. Intellectual Property</h3>
                <p>
                  All music, lyrics, artwork, and branding associated with MRJK Records,
                  including The Nice Girls™ and Georgia Wixen Records, are the property of
                  Jake Robison Records. Please enjoy them responsibly—reproduction or
                  commercial use without permission is not allowed.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">3. Respectful Use</h3>
                <p>
                  We ask that you use our website respectfully. Please do not attempt to
                  hack, overload, or misuse the site, and do not impersonate MRJK staff or
                  artists. All official inquiries should go through our public contact
                  channels.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">4. No Direct Contact</h3>
                <p>
                  To protect our team and artists, personal contact details are not shared
                  publicly. Attempts to contact staff or collaborators through unofficial
                  means may not receive a response. Please use official forms for all
                  communication.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">5. Third-Party Services</h3>
                <p>
                  Our site may include links or embeds from platforms like Spotify, Apple
                  Music, and YouTube. These services have their own policies, which apply
                  when you interact with them.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">6. Privacy & Data</h3>
                <p>
                  We collect limited information to provide and protect our services. For
                  details, please review our{" "}
                  <span
                    role="button"
                    onClick={() => setModal("privacy")}
                    className="cursor-pointer underline text-blue-600 hover:text-blue-800"
                  >
                    Privacy Policy
                  </span>
                  .
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">7. Disclaimers</h3>
                <p>
                  While we work to keep the site running smoothly, we cannot guarantee
                  uninterrupted access or error-free content. Use of the site is at your own
                  discretion.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">8. Limitation of Liability</h3>
                <p>
                  MRJK Records is not responsible for issues that may arise from using this
                  site, such as outages, data loss, or third-party actions.
                </p>
            
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">9. Updates</h3>
                <p>
                  We may update these Terms occasionally. The latest version will always be
                  posted here, and continued use of the site means you accept the updated
                  Terms.
                </p>
              </div>
            )}

            {modal === "cookies" && (
              <div className="text-sm text-neutral-700 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">Cookies Policy</h2>
                  <span className="text-xs text-neutral-500 mr-8">Updated September 9, 2025</span>
                </div>
            
                <p>
                  <strong>MRJK (MISTER JK or MISTER JAKE) RECORDS</strong>, known forth as
                  MRJK, uses cookies to support the functionality and experience of this
                  website.
                </p>
            
                {/* Divider */}
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">What are cookies?</h3>
                <p>
                  Cookies are small text files that a website places on your device when you
                  visit. They allow the site to "remember" certain information between
                  visits, such as preferences or login states. Cookies are stored locally in
                  your browser and may have an expiration period.
                </p>
            
                {/* Divider */}
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">How MRJK uses cookies</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Theme preferences</strong> (e.g., dark mode).</li>
                  <li><strong>Listening/player state</strong> (keeping track of playback).</li>
                  <li><strong>Page and modal states</strong> (open/closed sections, navigation).</li>
                </ul>
                <p>We do not use cookies for advertising or cross-site tracking.</p>
            
                {/* Divider */}
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Cookie duration</h3>
                <p>
                  Cookies persist for 365 days unless cleared sooner in
                  your browser. They are stored only on your device. MRJK does not have
                  direct access to, nor the ability to retrieve or modify, the cookies
                  stored on your browser.
                </p>
            
                {/* Divider */}
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Third-party cookies</h3>
                <p>
                  Some pages may include embedded content (such as YouTube or streaming
                  platforms). These services may set their own cookies under their
                  respective privacy and cookie policies.
                </p>
            
                {/* Divider */}
                <div className="border-t border-neutral-300 w-full" />
            
                <h3 className="font-semibold">Managing cookies</h3>
                <p>
                  You can disable or delete cookies at any time in your browser settings.
                  Please note that certain site features may not function properly without
                  them.
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </footer>
  );
}
