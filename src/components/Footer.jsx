import React, { useState, useEffect } from "react";
import Modal from "./FooterModal.jsx";
import PrivacyPolicy from "./policies/PrivacyPolicy.jsx";
import TermsOfService from "./policies/TermsOfService.jsx";
import CookiesPolicy from "./policies/CookiesPolicy.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  const [modal, setModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modal]);

  return (
    <footer className="mt-10 px-4 py-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-6 py-5 shadow text-center space-y-4">
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-700">
          <a
            role="button"
            onClick={() => setModal("privacy")}
            className="cursor-pointer hover:underline"
          >
            Privacy Policy
          </a>
          <a
            role="button"
            onClick={() => setModal("terms")}
            className="cursor-pointer hover:underline"
          >
            Terms of Service
          </a>
          <a
            role="button"
            onClick={() => setModal("cookies")}
            className="cursor-pointer hover:underline"
          >
            Cookie Settings
          </a>
        </nav>
        <div className="border-t border-neutral-300 w-full" />
        <p className="flex items-center justify-center gap-2 text-xs text-neutral-700 leading-relaxed">
          <img
            src="https://misterjk.com/site-assets/record_label.png"
            alt="Record Label logo"
            className="h-4 w-auto inline-block"
          />
          © {year} Jake Robison Records. All rights reserved.
        </p>
      </div>

      {modal && (
        <Modal onClose={() => setModal(null)}>
          {modal === "privacy" && <PrivacyPolicy setModal={setModal} />}
          {modal === "terms" && <TermsOfService setModal={setModal} />}
          {modal === "cookies" && <CookiesPolicy />}
        </Modal>
      )}
    </footer>
  );
}
