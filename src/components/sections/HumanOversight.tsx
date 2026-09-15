import { ShieldCheck } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { humanOversight } from "@/content/copy";

export function HumanOversight() {
  return (
    <SectionShell id={humanOversight.id} tone="navy">
      <Reveal>
        <SectionHeading
          eyebrow={humanOversight.eyebrow}
          headline={humanOversight.headline}
          body={humanOversight.body}
          align="center"
          className="mx-auto max-w-2xl"
        />
      </Reveal>

      <Reveal delay={80}>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {humanOversight.points.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-line-soft bg-navy-800/50 px-4 py-3.5 text-sm leading-relaxed text-mist"
            >
              {point}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={140}>
        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-teal-700/40 bg-teal-900/20 p-5 sm:p-6">
          <ShieldCheck size={19} className="mt-0.5 shrink-0 text-teal-400" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-mist">{humanOversight.callout}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
