import { siteConfig } from "@/lib/site-config";

export const legalName = "Axis Shift Data Systems LLC";
export const legalUpdated = "October 19, 2026";

// Exact wording shown next to the opt-in checkbox. It is also saved with each sign-up.
export const smsConsentText =
  `I agree to receive account notification text messages from ${legalName} at the phone number above, ` +
  "such as purchase confirmations and questions about where an expense belongs. " +
  "Message frequency varies. Message and data rates may apply. " +
  "Reply STOP to opt out at any time or HELP for help. " +
  "Consent is not a condition of any purchase.";

// Public (publishable) Supabase settings. The key is meant to be visible in a browser;
// the database only lets it add rows to sms_optins and never read them.
export const optinEndpoint = "https://nqzdecijtjopebkocaup.supabase.co/rest/v1/sms_optins";
export const optinPublishableKey = "sb_publishable_T24ziGwyjdeOQAbyrC5Xjw_wQZfT6XC";

export const supportEmail = siteConfig.email;
