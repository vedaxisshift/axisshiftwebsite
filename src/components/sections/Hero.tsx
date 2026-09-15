import { ListChecks } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { demoMailto } from "@/lib/site-config";
import { hero } from "@/content/copy";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line-soft bg-[linear-gradient(155deg,var(--color-teal-800)_0%,var(--color-navy-900)_58%,var(--color-navy-950)_100%)] pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_70%_60%_at_18%_0%,rgba(95,215,222,0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <Reveal>
          <Eyebrow tone="onTeal">{hero.eyebrow}</Eyebrow>
          <h1 className="text-balance mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button href={demoMailto}>{hero.primaryCta}</Button>
            <Button href={hero.secondaryHref} variant="outline" showArrow={false}>
              {hero.secondaryCta}
            </Button>
          </div>
          <p className="mt-7 text-sm text-mist-dim">{hero.footnote}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-md rounded-2xl border border-line bg-navy-900/70 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">{hero.mock.title}</p>
              <span className="inline-flex items-center rounded-full bg-teal-500/15 px-3 py-1 text-xs font-medium text-teal-400">
                {hero.mock.badge}
              </span>
            </div>

            <div className="mt-5 space-y-2.5">
              <div className="h-2 w-full overflow-hidden rounded-full bg-navy-700">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-glow" />
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-navy-700">
                <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-teal-500 to-cyan-glow" />
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-navy-800 p-4">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
                <ListChecks size={15} aria-hidden="true" />
              </span>
              <p className="text-sm leading-snug text-mist">{hero.mock.insight}</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {hero.mock.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-line-soft bg-navy-800/60 p-3.5">
                  <p className="text-xs text-mist-dim">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
