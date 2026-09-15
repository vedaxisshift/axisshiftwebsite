import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta } from "@/content/copy";

export function FinalCta() {
  return (
    <section className="border-b border-line-soft bg-navy-950 py-20 sm:py-24">
      <Container className="text-center">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="text-balance font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
              {finalCta.headline}
            </h2>
            <p className="mt-4 text-balance text-base leading-relaxed text-mist">
              {finalCta.body}
            </p>
            <Button href="/demo" className="mt-8">
              {finalCta.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
