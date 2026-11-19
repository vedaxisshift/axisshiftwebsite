export const siteConfig = {
  name: "Axis Shift Data Systems",
  shortName: "Axis Shift",
  tagline: "Structured systems. Aligned data. Intelligent outcomes.",
  description:
    "Axis Shift sends Atlanta listing agents a one-page Friday recap of showings, buyer feedback and market activity for every listing, ready to forward to their sellers.",
  url: "https://axisshiftdatasystems.com",
  email: "ved@axisshiftdatasystems.com",
  // Retool client portal. Signed-out visitors are sent to the sign-in page first.
  clientPortalUrl: "https://axisshiftdatasystems--axis-shift-client-portal.retool.app",
} as const;

export const demoMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "15-minute call request"
)}`;

export const navLinks = [
  { label: "The Problem", href: "/#problem" },
  { label: "What You Get", href: "/#sample" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Free Pilot", href: "/#pilot" },
] as const;
