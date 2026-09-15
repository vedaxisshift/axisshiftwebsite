export const siteConfig = {
  name: "Axis Shift Data Systems",
  shortName: "Axis Shift",
  tagline: "Structured systems. Aligned data. Intelligent outcomes.",
  description:
    "Axis Shift helps growing service businesses bring scattered information from spreadsheets, CRMs, accounting tools, and operational systems into one clear operating view.",
  url: "https://axisshiftdatasystems.com",
  email: "ved@axisshiftdatasystems.com",
} as const;

export const demoMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Private Demo Request"
)}`;

export const navLinks = [
  { label: "The Problem", href: "#the-problem" },
  { label: "What We Build", href: "#what-we-build" },
  { label: "Practical AI", href: "#practical-ai" },
  { label: "How It Works", href: "#how-it-works" },
] as const;
