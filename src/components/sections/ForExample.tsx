import { BadgeCheck, Receipt, ClipboardList } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { forExample } from "@/content/copy";

const icons = [BadgeCheck, Receipt, ClipboardList];

export function ForExample() {
  return (
    <SectionShell id={forExample.id} tone="teal">
      <Reveal>
        <SectionHeading
          eyebrow={forExample.eyebrow}
          headline={forExample.headline}
          surface="teal"
          align="center"
          className="mx-auto max-w-2xl"
        />
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {forExample.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.07]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-glow">
                  <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[1.05rem] font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{item.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
