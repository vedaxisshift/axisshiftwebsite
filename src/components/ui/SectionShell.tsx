import { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "navy" | "teal" | "gradient";

const toneClasses: Record<Tone, string> = {
  navy: "bg-navy-900",
  teal:
    "bg-teal-800 bg-[radial-gradient(ellipse_120%_100%_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]",
  gradient:
    "bg-[linear-gradient(160deg,var(--color-teal-800)_0%,var(--color-navy-900)_55%,var(--color-navy-950)_100%)]",
};

export function SectionShell({
  id,
  tone = "navy",
  children,
  className = "",
  containerClassName = "",
  border = true,
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  border?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-24 lg:py-28 ${toneClasses[tone]} ${
        border ? "border-b border-line-soft" : ""
      } ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
