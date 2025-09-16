import React from "react";

export default function TermsOfService({ setModal }) {
  return (
    <div className="text-sm text-neutral-700 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Terms of Service</h2>
        <span className="text-xs text-neutral-500 mr-8">Updated September 12, 2025</span>
      </div>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">1. Eligibility</h3>
      <p>
        Our site is recommended for users 16 and older. Some content may include mature themes.
        Parents and guardians should use discretion when allowing minors to access this site.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">2. Intellectual Property</h3>
      <p>
        All music, lyrics, artwork, and branding associated with MRJK Records, including The Nice
        Girls™ and Georgia Wixen Records, are the property of Jake Robison Records. Please enjoy them
        responsibly—reproduction or commercial use without permission is not allowed.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">3. Respectful Use</h3>
      <p>
        We ask that you use our website respectfully. Please do not attempt to hack, overload, or
        misuse the site, and do not impersonate MRJK staff or artists. All official inquiries should go
        through our public contact channels.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">4. No Direct Contact</h3>
      <p>
        To protect our team and artists, personal contact details are not shared publicly. Attempts to
        contact staff or collaborators through unofficial means may not receive a response. Please use
        official forms for all communication.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">5. Third-Party Services</h3>
      <p>
        Our site may include links or embeds from platforms like Spotify, Apple Music, and YouTube.
        These services have their own policies, which apply when you interact with them.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">6. Privacy &amp; Data</h3>
      <p>
        We collect limited information to provide and protect our services. For details, please review
        our{" "}
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
        While we work to keep the site running smoothly, we cannot guarantee uninterrupted access or
        error-free content. Use of the site is at your own discretion.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">8. Limitation of Liability</h3>
      <p>
        MRJK Records is not responsible for issues that may arise from using this site, such as
        outages, data loss, or third-party actions.
      </p>

      <div className="border-t border-neutral-300 w-full" />
      <h3 className="font-semibold">9. Updates</h3>
      <p>
        We may update these Terms occasionally. The latest version will always be posted here, and
        continued use of the site means you accept the updated Terms.
      </p>
    </div>
  );
}
