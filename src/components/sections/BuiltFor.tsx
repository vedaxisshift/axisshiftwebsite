import { CheckCircle2 } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { builtFor } from "@/content/copy";

export function BuiltFor() {
  return (
    <SectionShell id={builtFor.id} tone="teal">
      <Reveal>
        <SectionHeading
          eyebrow={builtFor.eyebrow}
          headline={builtFor.headline}
          surface="teal"
          align="center"
          className="mx-auto max-w-2xl"
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        {builtFor.items.map((item, i) => (
          <Reveal
            key={item}
            delay={(i % 2) * 80}
            className={i === builtFor.items.length - 1 ? "sm:col-span-2" : undefined}
          >
            <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-glow" aria-hidden="true" />
              <p className="text-[0.95rem] leading-relaxed text-white/90">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
