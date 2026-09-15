export default function DemoPage() {
  return (
    <main className="min-h-screen bg-navy-950 px-6 py-20 text-ink">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            Axis Shift Data Systems
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Request a Private Demo
          </h1>

          <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
            Tell us a little about your business and where information is
            getting difficult to manage. We’ll review your request and follow
            up shortly.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line-soft bg-white">
          <iframe
            src="https://tally.so/r/aQRJPv?transparentBackground=1"
            width="100%"
            height="950"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Request a Private Demo"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </main>
  );
}
