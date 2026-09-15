import { SectionShell } from "@/components/ui/SectionShell";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { demoMailto } from "@/lib/site-config";
import { demoSection } from "@/content/copy";

export function DemoSection() {
  return (
    <SectionShell
      id={demoSection.id}
      tone="gradient"
      containerClassName="text-center"
      className="py-24 sm:py-28"
    >
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <Eyebrow tone="onTeal">{demoSection.eyebrow}</Eyebrow>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            {demoSection.headline}
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-mist sm:text-lg">
            {demoSection.body}
          </p>
          <p className="mt-4 text-sm text-mist-dim">{demoSection.note}</p>
          <Button href={demoMailto} variant="outline" className="mt-8">
            {demoSection.cta}
          </Button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
