import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { legalName, legalUpdated, supportEmail } from "@/lib/sms";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${legalName} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated={legalUpdated}>
      <p>
        This Privacy Policy explains how {legalName} (&ldquo;Axis Shift,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses and protects
        information when you visit{" "}
        <a href={siteConfig.url}>axisshiftdatasystems.com</a>, sign up for text
        messages, or use the tools we build for our clients.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> you give us, such as your name, email
          address, mobile phone number and company name.
        </li>
        <li>
          <strong>Text message consent records</strong>, including the date,
          time, page and wording you agreed to when you opted in.
        </li>
        <li>
          <strong>Business records you share with us</strong> so we can provide
          our services, such as bank or card transactions, receipts, and
          property or vendor details.
        </li>
        <li>
          <strong>Messages</strong> you send us by text or email, including
          replies to our questions.
        </li>
        <li>
          <strong>Basic website data</strong> such as browser type and pages
          visited, collected by our hosting provider.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To provide, run and improve the services you asked for.</li>
        <li>
          To send account notifications by text or email, such as purchase
          confirmations and questions about where an expense belongs.
        </li>
        <li>To answer your questions and provide support.</li>
        <li>To keep records of your consent and to meet legal requirements.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Text messaging (SMS)</h2>
      <p>
        If you opt in to text messages, we use your mobile number only to send
        the account notifications you agreed to and to reply to your messages.
        Message frequency varies. Message and data rates may apply. Reply{" "}
        <strong>STOP</strong> to opt out at any time or <strong>HELP</strong>{" "}
        for help.
      </p>
      <p>
        <strong>
          No mobile information will be shared with third parties/affiliates
          for marketing/promotional purposes. All the above categories exclude
          text messaging originator opt-in data and consent; this information
          will not be shared with any third parties.
        </strong>
      </p>

      <h2>How we share information</h2>
      <p>
        We share information only with service providers that help us run our
        business, such as hosting, database, messaging and AI processing
        providers. They may use it only to provide services to us. We may also
        disclose information when required by law or to protect our rights.
        These limits do not override the text messaging commitment above.
      </p>

      <h2>How we protect and keep information</h2>
      <p>
        We use access controls and encrypted connections to protect your
        information. Each client can see only their own records. We keep
        information for as long as we provide services to you or as the law
        requires, then delete it.
      </p>

      <h2>Your choices</h2>
      <p>
        You can stop text messages at any time by replying STOP. You can ask us
        to see, correct or delete your information by emailing{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>

      <h2>Children</h2>
      <p>
        Our services are for businesses and are not directed to anyone under
        18. We do not knowingly collect information from children.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy. The date at the top shows when it last
        changed.
      </p>

      <h2>Contact</h2>
      <p>
        {legalName}, Atlanta, Georgia
        <br />
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
    </LegalPage>
  );
}
