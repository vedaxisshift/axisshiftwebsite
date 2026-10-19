import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalName, legalUpdated, supportEmail } from "@/lib/sms";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using ${legalName} services and text messages.`,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated={legalUpdated}>
      <p>
        These Terms apply to your use of{" "}
        <a href={siteConfig.url}>axisshiftdatasystems.com</a> and the services,
        tools and text messages provided by {legalName} (&ldquo;Axis
        Shift,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using them, you
        agree to these Terms.
      </p>

      <h2>Our services</h2>
      <p>
        Axis Shift builds data and reporting tools for businesses, such as
        dashboards and systems that organize transactions, receipts and
        records. The specific work, price and timeline for a client are set out
        in a separate agreement or proposal. If that agreement conflicts with
        these Terms, the agreement controls.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Give us accurate information and keep your login details safe.</li>
        <li>Share only data you have the right to share.</li>
        <li>Do not misuse our tools or try to access other clients&rsquo; data.</li>
        <li>
          Review results before relying on them. Our tools help organize
          information, but you and your accountant remain responsible for your
          books, taxes and business decisions.
        </li>
      </ul>

      <h2>Text messaging terms</h2>
      <ul>
        <li>
          <strong>Program:</strong> Axis Shift account notifications. When you
          opt in at <a href="/sms/">axisshiftdatasystems.com/sms</a>, you agree
          to receive texts from {legalName} about your account, such as purchase
          confirmations and questions about which property or category an
          expense belongs to. You can reply to these texts to answer.
        </li>
        <li>
          <strong>Frequency:</strong> Message frequency varies with your account
          activity.
        </li>
        <li>
          <strong>Cost:</strong> Message and data rates may apply.
        </li>
        <li>
          <strong>Opt out:</strong> Reply <strong>STOP</strong> at any time to
          stop messages. We will send one message confirming you are opted out,
          and then no more messages unless you opt in again.
        </li>
        <li>
          <strong>Help:</strong> Reply <strong>HELP</strong> for help, or email{" "}
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
        </li>
        <li>
          Consent to receive texts is not a condition of any purchase.
        </li>
        <li>
          Carriers are not liable for delayed or undelivered messages.
        </li>
        <li>
          See our <a href="/privacy/">Privacy Policy</a> for how we handle your
          phone number. We never share it or your opt-in consent with third
          parties for marketing.
        </li>
      </ul>

      <h2>Your data</h2>
      <p>
        You own the data you give us. You allow us to use it only to provide
        our services to you. Our <a href="/privacy/">Privacy Policy</a> explains
        how we handle it.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Our website and tools are provided &ldquo;as is.&rdquo; We work to keep
        them accurate and available, but we do not promise they will be
        error-free or uninterrupted. We do not provide legal, tax or accounting
        advice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, Axis Shift is not liable for indirect or
        consequential losses, and our total liability for any claim is limited
        to the amount you paid us in the 12 months before the claim.
      </p>

      <h2>Changes and ending use</h2>
      <p>
        We may update these Terms. The date at the top shows when they last
        changed. You may stop using our services at any time, subject to any
        separate agreement with us.
      </p>

      <h2>Governing law</h2>
      <p>These Terms are governed by the laws of the State of Georgia, USA.</p>

      <h2>Contact</h2>
      <p>
        {legalName}, Atlanta, Georgia
        <br />
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
    </LegalPage>
  );
}
