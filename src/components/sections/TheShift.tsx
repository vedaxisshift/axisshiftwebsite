import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { theShift } from "@/content/copy";

export function TheShift() {
  return (
    <section
      id={theShift.id}
      className="scroll-mt-24 border-b border-line-soft bg-navy-950"
    >
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">{theShift.eyebrow}</Eyebrow>
            <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">
              {theShift.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
              {theShift.body}
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="relative grid lg:grid-cols-2">
        <div className="hidden lg:absolute lg:inset-y-0 lg:left-1/2 lg:z-10 lg:flex lg:w-14 lg:-translate-x-1/2 lg:items-center lg:justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-navy-950 text-teal-400 shadow-[0_0_0_6px_var(--color-navy-950)]">
            <ArrowRight size={18} aria-hidden="true" />
          </span>
        </div>

        <Reveal>
          <div className="h-full bg-navy-800 px-6 py-12 sm:px-10 sm:py-14 lg:pr-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist-dim">
              {theShift.before.label}
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {theShift.before.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-mist-dim">
                    <X size={12} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-mist-dim">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full bg-[linear-gradient(160deg,var(--color-teal-800),var(--color-teal-900))] px-6 py-12 sm:px-10 sm:py-14 lg:pl-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-glow">
              {theShift.after.label}
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {theShift.after.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[0.95rem] font-medium leading-relaxed text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
