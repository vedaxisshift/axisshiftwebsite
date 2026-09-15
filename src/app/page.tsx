import { Hero } from "@/components/sections/Hero";
import { OperatingProblem } from "@/components/sections/OperatingProblem";
import { TheShift } from "@/components/sections/TheShift";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { PracticalAi } from "@/components/sections/PracticalAi";
import { RecordIntake } from "@/components/sections/RecordIntake";
import { HumanOversight } from "@/components/sections/HumanOversight";
import { BuiltFor } from "@/components/sections/BuiltFor";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DemoSection } from "@/components/sections/DemoSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <OperatingProblem />
      <TheShift />
      <WhatWeBuild />
      <PracticalAi />
      <RecordIntake />
      <HumanOversight />
      <BuiltFor />
      <HowItWorks />
      <DemoSection />
      <FinalCta />
    </>
  );
}
