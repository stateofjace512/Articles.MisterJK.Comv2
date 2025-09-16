import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NoiseBackground from "../components/NoiseBackground";
import EmbossedButton from "../components/EmbossedButton";

export default function NotFound() {
  const handleBack = (e) => {
    e.preventDefault();
    if (document.referrer && document.referrer !== window.location.href) {
      window.history.back();
    } else {
      window.location.href = "https://misterjk.com/";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <NoiseBackground />

      {/* Navigation */}
      <Navigation />

      {/* 404 Content */}
      <div className="w-full mt-[6rem]">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-white to-neutral-200 shadow-[0_20px_40px_rgba(0,0,0,0.25)]" />
            <div className="relative rounded-lg border border-neutral-300 bg-white">
              <div className="rounded-lg p-8 bg-gradient-to-b from-white to-neutral-50 text-center">
                <div className="text-8xl font-extrabold text-neutral-300 mb-4">
                  404
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-6">
                  Page Not Found
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
                  Looks like this page went on tour without telling us. Let’s get
                  you back to the music.
                </p>

                {/* Embossed bubble button */}
                <EmbossedButton as="button" onClick={handleBack} className="px-8 py-4 text-lg">
                  <span className="link-text-black-to-rainbow">
                    ← Return Home
                  </span>
                </EmbossedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
