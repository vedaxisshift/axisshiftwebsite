import type { Metadata } from "next";
import { SmsOptInForm } from "@/components/sms/SmsOptInForm";

export const metadata: Metadata = {
  title: "Text Message Sign-up",
  description:
    "Sign up for account notification text messages from Axis Shift Data Systems.",
  alternates: { canonical: "/sms/" },
};

export default function SmsPage() {
  return (
    <div className="bg-navy-950 px-6 py-20 text-ink">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
          Axis Shift Data Systems
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Sign up for text updates
        </h1>
        <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
          Axis Shift clients can get account notifications by text, such as a
          quick question after a purchase: &ldquo;Which property was this Home
          Depot purchase for?&rdquo; Just reply to answer, and we&rsquo;ll file
          it in the right place.
        </p>

        <div className="mt-10">
          <SmsOptInForm />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-mist-dim">
          Message frequency varies. Message and data rates may apply. Reply STOP
          to opt out, HELP for help. We never share your phone number or opt-in
          consent with third parties for marketing.
        </p>
      </div>
    </div>
  );
}
