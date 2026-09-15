import { MessageCircleQuestion } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { practicalAi } from "@/content/copy";

export function PracticalAi() {
  return (
    <SectionShell id={practicalAi.id} tone="navy">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={practicalAi.eyebrow}
            headline={practicalAi.headline}
            body={practicalAi.body}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-line bg-navy-800/60 p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <MessageCircleQuestion size={17} className="text-teal-400" aria-hidden="true" />
              <p className="text-sm font-semibold text-ink">{practicalAi.mock.title}</p>
            </div>
            <ul className="mt-5 flex flex-col gap-2.5">
              {practicalAi.mock.questions.map((q) => (
                <li
                  key={q}
                  className="rounded-xl border border-line-soft bg-navy-900/60 px-4 py-3 text-sm leading-relaxed text-mist"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
