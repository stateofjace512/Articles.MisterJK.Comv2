import React from "react";

export default function FooterModal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full mx-4 rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_rgba(0,0,0,0.25)] p-6 text-left max-h-[80vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-700 text-lg"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
