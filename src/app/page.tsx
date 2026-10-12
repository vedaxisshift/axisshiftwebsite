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

export default function Home() {
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
