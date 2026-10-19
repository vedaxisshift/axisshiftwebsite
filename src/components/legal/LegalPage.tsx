import { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-navy-950 px-6 py-20 text-ink">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
          Axis Shift Data Systems
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-mist-dim">Last updated: {updated}</p>
        <div
          className="mt-10 space-y-5 text-base leading-relaxed text-mist
            [&_a]:text-teal-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-teal-300
            [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink
            [&_strong]:text-ink
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
        >
          {children}
        </div>
      </article>
    </div>
  );
}
