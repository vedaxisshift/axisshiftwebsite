// Copy for the /seller-updates landing page (Friday Seller Update for listing agents).
// Keep every claim true: no testimonials until real pilots finish, sample data
// stays clearly labeled as illustrative.

import { siteConfig } from "@/lib/site-config";

export const pilotMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Friday Seller Update pilot"
)}&body=${encodeURIComponent(
  "Hi Ved,\n\nI'd like one of the pilot spots.\n\nName:\nBrokerage:\nActive listing(s):\n"
)}`;

export const sellerHero = {
  eyebrow: "For Atlanta listing agents",
  headline: "Every seller updated every Friday, without the extra work.",
  body: "A one-page recap of the week's showings, buyer feedback and market activity lands in your inbox Friday morning, ready to forward. Your sellers still hear it from you.",
  primaryCta: "Claim a pilot spot",
  secondaryCta: "How it works",
  secondaryHref: "#how-it-works",
  footnote: "Taking on 5 agents for a free 6-week pilot. No contract, no card.",
};

export const sellerProblem = {
  id: "problem",
  eyebrow: "The seller update problem",
  headline: "When a listing sits, the “what’s happening?” calls start.",
  body: "Homes are taking longer to sell this year. Every extra week is another update your sellers expect: how many showings, what buyers said, what the market is doing. Writing that by hand for every listing, every week, takes time away from listing and selling.",
  points: [
    "Showing feedback scattered across emails",
    "Sellers asking for updates you haven’t had time to write",
    "Market changes your sellers spot on Zillow before you mention them",
    "Quiet weeks that feel like bad news without context",
  ],
};

export const sellerSample = {
  id: "sample",
  eyebrow: "What lands in your inbox",
  headline: "One page per listing. Plain English. Ready to forward.",
  body: "Each Friday recap covers the four things sellers ask about most, so you can send it as is or add a personal note first.",
  label: "Sample · fictional address and numbers",
  parts: [
    { title: "Showings", body: "How many this week and in total, so sellers see the activity." },
    { title: "What buyers said", body: "Feedback themes in plain English, with no buyer or agent names." },
    { title: "Market this week", body: "New listings, price changes and contracts nearby, for context." },
    { title: "Next week", body: "Open houses, price conversations or anything planned." },
  ],
  mock: {
    title: "Friday Seller Update",
    address: "123 Example Lane",
    badge: "Week 3 on market",
    stats: [
      { label: "Showings this week", value: "4" },
      { label: "Total showings", value: "11" },
    ],
    sections: [
      {
        heading: "What buyers said",
        text: "Buyers liked the kitchen and the backyard. Two mentioned the price compared with a newer build nearby.",
      },
      {
        heading: "Market this week",
        text: "2 new listings within a mile. 1 nearby home went under contract.",
      },
      {
        heading: "Next week",
        text: "Open house Saturday, 1 to 3 PM.",
      },
    ],
  },
};

export const sellerHowItWorks = {
  id: "how-it-works",
  eyebrow: "How it works",
  headline: "About 10 minutes to set up. Then it runs every week.",
  steps: [
    {
      number: "01",
      title: "Forward your showing emails",
      body: "Set your showing feedback emails (ShowingTime, BrokerBay and similar) to forward automatically. That’s the only setup.",
    },
    {
      number: "02",
      title: "Get the recap Friday morning",
      body: "A one-page update for each active listing lands in your inbox, written in plain English.",
    },
    {
      number: "03",
      title: "Review and forward",
      body: "Tweak anything you like, then send it to your sellers. Nothing reaches them without you.",
    },
  ],
};

export const sellerTrust = {
  id: "trust",
  eyebrow: "You stay in control",
  headline: "Your sellers, your voice, your data.",
  points: [
    "We never contact your sellers",
    "Buyer and agent names are left out of every update",
    "Your data is kept separate from every other agent’s",
    "You keep using the tools you already have",
  ],
};

export const sellerPilot = {
  id: "pilot",
  eyebrow: "Founding pilot",
  headline: "Free 6-week pilot for 5 Atlanta agents.",
  body: "Pick one or more active listings. For six weeks you get a Friday recap for each one. At the end, tell us what your sellers thought. If it’s worth keeping, we’ll agree on a simple monthly price then. If not, you walk away.",
  points: ["No cost for 6 weeks", "No contract or card", "Stop anytime", "Your feedback shapes the product"],
  cta: "Claim a pilot spot",
};

export const sellerFaq = {
  id: "faq",
  eyebrow: "Questions",
  headline: "Common questions",
  items: [
    {
      q: "Do I need new software?",
      a: "No. You keep using your current showing service and email.",
    },
    {
      q: "What do you need from me?",
      a: "Your listing address and your showing feedback emails, forwarded automatically.",
    },
    {
      q: "Who sees my sellers’ information?",
      a: "Only you. Updates go to your inbox, not your sellers’, and include showing counts and feedback themes, not buyer or agent names.",
    },
    {
      q: "Does it work for rentals?",
      a: "Yes. For leases, the recap covers inquiries, showings and applications, so you can keep the owner in the loop.",
    },
    {
      q: "What happens after six weeks?",
      a: "If you want to keep it, we’ll agree on a simple monthly price. If not, it stops.",
    },
  ],
};

export const sellerFinalCta = {
  headline: "Your sellers will ask. Have the answer ready.",
  body: "Friday recaps for your active listings, ready to forward. 5 pilot spots.",
  cta: "Claim a pilot spot",
};
