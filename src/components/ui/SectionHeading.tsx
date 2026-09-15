import { ReactNode } from "react";

type Surface = "navy" | "teal";

export function Eyebrow({
  children,
  tone = "teal",
  className = "",
}: {
  children: ReactNode;
  tone?: "teal" | "onTeal";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "teal" ? "text-teal-400" : "text-white/90"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  headline,
  body,
  align = "left",
  surface = "navy",
  className = "",
}: {
  eyebrow?: string;
  headline: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  surface?: Surface;
  className?: string;
}) {
  const bodyColor = surface === "teal" ? "text-white/90" : "text-mist";

  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Eyebrow tone={surface === "teal" ? "onTeal" : "teal"}>{eyebrow}</Eyebrow>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {headline}
      </h2>
      {body && (
        <p
          className={`text-balance text-base leading-relaxed sm:text-lg ${bodyColor} ${
            align === "center" ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
