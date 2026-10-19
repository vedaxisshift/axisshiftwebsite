"use client";

import { FormEvent, useState } from "react";
import { optinEndpoint, optinPublishableKey, smsConsentText } from "@/lib/sms";

type Status = "idle" | "sending" | "done" | "error";

const phonePattern = /^\+?[0-9 ()\-.]{10,20}$/;

export function SmsOptInForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    // Hidden field that people never see; bots tend to fill it in.
    if (String(form.get("company_website") ?? "").trim()) {
      setStatus("done");
      return;
    }

    const fullName = String(form.get("full_name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const consent = form.get("consent") === "yes";

    if (!fullName || fullName.length > 120) {
      setError("Please enter your name.");
      return;
    }
    if (!phonePattern.test(phone) || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid mobile number, including area code.");
      return;
    }
    if (!consent) {
      setError("Please check the box to agree to receive text messages.");
      return;
    }

    setError("");
    setStatus("sending");
    try {
      const response = await fetch(optinEndpoint, {
        method: "POST",
        headers: {
          apikey: optinPublishableKey,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          full_name: fullName,
          phone,
          email: email || null,
          consent: true,
          consent_text: smsConsentText,
          page_url: window.location.href.slice(0, 300),
        }),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong and your sign-up was not saved. Please try again, or email us."
      );
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-teal-700 bg-navy-900 p-6" role="status">
        <p className="font-display text-xl font-semibold text-ink">You&rsquo;re signed up.</p>
        <p className="mt-2 text-mist">
          You&rsquo;ll get account notification texts from Axis Shift Data Systems.
          Reply STOP at any time to opt out, or HELP for help.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-navy-700 bg-navy-900 px-4 py-3 text-ink placeholder:text-mist-dim focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-xl border border-navy-700 bg-navy-900/60 p-6 sm:p-8">
      <div>
        <label htmlFor="full_name" className="text-sm font-medium text-ink">
          Full name
        </label>
        <input id="full_name" name="full_name" type="text" autoComplete="name" required maxLength={120} className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          Mobile phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          maxLength={20}
          placeholder="(404) 555-0123"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email <span className="text-mist-dim">(optional)</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={200} className={inputClass} />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          value="yes"
          className="mt-1 h-5 w-5 shrink-0 accent-teal-500"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-mist">
          {smsConsentText} See our{" "}
          <a href="/privacy/" className="text-teal-400 underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms/" className="text-teal-400 underline underline-offset-2">
            Terms of Service
          </a>
          .
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-300" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-teal-500 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-teal-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Signing up…" : "Sign up for texts"}
      </button>
    </form>
  );
}
