import React from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-md border border-neutral-300 " +
  "bg-gradient-to-b from-white to-neutral-200 text-neutral-900 " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] " +
  "active:shadow-inner active:translate-y-px focus:outline-none focus:ring-2 focus:ring-blue-500/60 " +
  "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 font-semibold";

export default function EmbossedButton({
  as = "a",
  href,
  children,
  external = false,
  disabled = false,
  className = "",
  onClick,
  target,
  rel,
  type,
  ...rest
}) {
  const disabledClasses = disabled ? " opacity-50 cursor-not-allowed" : "";
  const combinedClassName = `${baseClasses} ${className}${disabledClasses}`.trim();

  if (as === "button" || onClick || disabled) {
    return (
      <button
        type={type || "button"}
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
        {...rest}
      >
        {children}
      </button>
    );
  }

  const linkTarget = external ? "_blank" : target;
  const linkRel = external ? "noopener noreferrer" : rel;

  return (
    <a href={href} target={linkTarget} rel={linkRel} className={combinedClassName} {...rest}>
      {children}
    </a>
  );
}
