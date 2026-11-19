import { CalendarCheck, Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { Reveal } from "@/components/ui/Reveal";
import {
  pilotMailto,
  sellerFaq,
  sellerFinalCta,
  sellerHero,
  sellerHowItWorks,
  sellerPilot,
  sellerProblem,
  sellerSample,
  sellerTrust,
} from "@/content/seller-updates";

function SampleCard() {
  const { mock, label } = sellerSample;
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl border border-line bg-navy-900/70 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">{mock.title}</p>
          <p className="mt-0.5 text-xs text-mist-dim">{mock.address}</p>
        </div>
        <span className="inline-flex shrink-0 items-center rounded-full bg-teal-500/15 px-3 py-1 text-xs font-medium text-teal-400">
          {mock.badge}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {mock.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-line-soft bg-navy-800/60 p-3.5">
            <p className="text-xs text-mist-dim">{stat.label}</p>
            <p className="mt-1 text-lg font-semibold text-ink">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {mock.sections.map((section) => (
          <div key={section.heading} className="rounded-xl bg-navy-800 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-400">
              {section.heading}
            </p>
            <p className="mt-1.5 text-sm leading-snug text-mist">{section.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-mist-dim">{label}</p>
    </div>
  );
}

export function SellerUpdatesContent() {
  return (
    <>
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
            <Eyebrow tone="onTeal">{sellerHero.eyebrow}</Eyebrow>
            <h1 className="text-balance mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              {sellerHero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
              {sellerHero.body}
            </p>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button href={pilotMailto}>{sellerHero.primaryCta}</Button>
              <Button href={sellerHero.secondaryHref} variant="outline" showArrow={false}>
                {sellerHero.secondaryCta}
              </Button>
            </div>
            <p className="mt-7 text-sm text-mist-dim">{sellerHero.footnote}</p>
          </Reveal>
          <Reveal delay={120}>
            <SampleCard />
          </Reveal>
        </Container>
      </section>

      <SectionShell id={sellerProblem.id} tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={sellerProblem.eyebrow}
              headline={sellerProblem.headline}
              body={sellerProblem.body}
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-3">
              {sellerProblem.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-line-soft bg-navy-800/50 p-4 text-sm leading-relaxed text-mist"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id={sellerSample.id} tone="gradient">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={sellerSample.eyebrow}
              headline={sellerSample.headline}
              body={sellerSample.body}
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="grid gap-3 sm:grid-cols-2">
              {sellerSample.parts.map((part) => (
                <div key={part.title} className="rounded-2xl border border-line-soft bg-navy-800/60 p-5">
                  <h3 className="text-[0.98rem] font-semibold text-ink">{part.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{part.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id={sellerHowItWorks.id} tone="navy">
        <Reveal>
          <SectionHeading
            eyebrow={sellerHowItWorks.eyebrow}
            headline={sellerHowItWorks.headline}
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sellerHowItWorks.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 70}>
              <div className="relative h-full rounded-2xl border border-line-soft bg-navy-800/50 p-5">
                <span className="font-display text-2xl font-bold text-teal-500">{step.number}</span>
                <h3 className="mt-3 text-[0.98rem] font-semibold leading-snug text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id={sellerTrust.id} tone="teal">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={sellerTrust.eyebrow}
              headline={sellerTrust.headline}
              surface="teal"
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {sellerTrust.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed text-white/90"
                >
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell id={sellerPilot.id} tone="navy">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-navy-800/60 p-6 text-center sm:p-10">
            <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/15 text-teal-400">
              <CalendarCheck size={20} aria-hidden="true" />
            </span>
            <div className="mt-5">
              <Eyebrow>{sellerPilot.eyebrow}</Eyebrow>
            </div>
            <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">
              {sellerPilot.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-mist sm:text-lg">
              {sellerPilot.body}
            </p>
            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {sellerPilot.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-ink">
                  <Check size={16} className="shrink-0 text-teal-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href={pilotMailto}>{sellerPilot.cta}</Button>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell id={sellerFaq.id} tone="navy">
        <Reveal>
          <SectionHeading
            eyebrow={sellerFaq.eyebrow}
            headline={sellerFaq.headline}
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {sellerFaq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-line-soft bg-navy-800/50 p-5 open:bg-navy-800"
            >
              <summary className="cursor-pointer list-none text-[0.98rem] font-semibold text-ink marker:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="gradient" border={false}>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">
              {sellerFinalCta.headline}
            </h2>
            <p className="mt-5 text-balance text-base leading-relaxed text-mist sm:text-lg">
              {sellerFinalCta.body}
            </p>
            <div className="mt-9">
              <Button href={pilotMailto}>{sellerFinalCta.cta}</Button>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
