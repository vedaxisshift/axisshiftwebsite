import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { OperatingProblem } from "@/components/sections/OperatingProblem";
import { ForExample } from "@/components/sections/ForExample";
import { TheShift } from "@/components/sections/TheShift";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { PracticalAi } from "@/components/sections/PracticalAi";
import { RecordIntake } from "@/components/sections/RecordIntake";
import { HumanOversight } from "@/components/sections/HumanOversight";
import { BuiltFor } from "@/components/sections/BuiltFor";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCta } from "@/components/sections/FinalCta";

// The former homepage: general data and automation services for small businesses.
export const metadata: Metadata = {
  title: "Data & Automation Services",
  description:
    "Axis Shift connects the tools small service businesses already use, cleans up the data, and automates the busywork with human review.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <OperatingProblem />
      <ForExample />
      <TheShift />
      <WhatWeBuild />
      <PracticalAi />
      <RecordIntake />
      <HumanOversight />
      <BuiltFor />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
