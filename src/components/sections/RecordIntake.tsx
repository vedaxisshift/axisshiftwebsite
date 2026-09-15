import { MessageSquareText, CheckCircle2 } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { recordIntake } from "@/content/copy";

export function RecordIntake() {
  return (
    <SectionShell id={recordIntake.id} tone="teal">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={recordIntake.eyebrow}
            headline={recordIntake.headline}
            body={recordIntake.body}
            surface="teal"
          />
          <p className="mt-5 max-w-xl text-balance text-sm font-semibold leading-relaxed text-white">
            {recordIntake.note}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-7">
            <p className="text-sm font-semibold text-white">{recordIntake.mock.title}</p>

            <div className="mt-5 rounded-xl bg-navy-950/40 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                <MessageSquareText size={13} aria-hidden="true" />
                {recordIntake.mock.updateLabel}
              </div>
              <p className="mt-2.5 text-sm italic leading-relaxed text-white/90">
                {recordIntake.mock.update}
              </p>
            </div>

            <div className="mt-3 rounded-xl bg-navy-950/40 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                <CheckCircle2 size={13} aria-hidden="true" />
                {recordIntake.mock.resultLabel}
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-white/90">
                {recordIntake.mock.result}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
