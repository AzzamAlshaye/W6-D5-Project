import React from "react";
import AboutHeroSection from "./AboutHeroSection";
import AboutOurStorySection from "./About-our-Story";
import OurValuesSection from "./OurValues";
import OurLeadership from "./OurLeadership";
// import HelpSection from "../components/HelpSection";
// import LatestSection from "../components/LatestSection";
// import TeamsSection from "../components/TeamsSection";

export default function AboutUs() {
  return (
    <main className="flex flex-col">
      {/* Hero section */}
      <AboutHeroSection />

      <AboutOurStorySection />
      <OurValuesSection />
      <OurLeadership />
      {/* Latest News & Articles */}
      {/* <LatestSection tabs={tabs} articles={articles} /> */}

      {/* Teams / Join Us */}
      {/* <TeamsSection /> */}
    </main>
  );
}
