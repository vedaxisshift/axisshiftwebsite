import { AlertCircle } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { operatingProblem } from "@/content/copy";

export function OperatingProblem() {
  return (
    <SectionShell id="problem" tone="navy">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={operatingProblem.eyebrow}
            headline={operatingProblem.headline}
            body={operatingProblem.body}
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="flex flex-col gap-3 rounded-2xl border border-line bg-navy-800/60 p-3">
            {operatingProblem.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl px-4 py-3.5 transition-colors hover:bg-navy-800"
              >
                <AlertCircle
                  size={18}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-teal-400"
                  aria-hidden="true"
                />
                <span className="text-[0.95rem] leading-relaxed text-mist">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}
