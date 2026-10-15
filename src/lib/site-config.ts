export const siteConfig = {
  name: "Axis Shift Data Systems",
  shortName: "Axis Shift",
  tagline: "Structured systems. Aligned data. Intelligent outcomes.",
  description:
    "Axis Shift helps growing service businesses bring scattered information from spreadsheets, CRMs, accounting tools, and operational systems into one clear operating view.",
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
  { label: "What We Build", href: "/#what-we-build" },
  { label: "Practical AI", href: "/#practical-ai" },
  { label: "How It Works", href: "/#how-it-works" },
] as const;
