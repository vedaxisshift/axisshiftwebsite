import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorks } from "@/content/copy";

export function HowItWorks() {
  return (
    <SectionShell id={howItWorks.id} tone="navy">
      <Reveal>
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          headline={howItWorks.headline}
          align="center"
          className="mx-auto max-w-2xl"
        />
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {howItWorks.steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 70}>
            <div className="relative h-full rounded-2xl border border-line-soft bg-navy-800/50 p-5">
              <span className="font-display text-2xl font-bold text-teal-500">{step.number}</span>
              <h3 className="mt-3 text-[0.98rem] font-semibold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
