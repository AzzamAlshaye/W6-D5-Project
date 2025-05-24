import React from "react";
import SlideSection from "../home-page/Slide-Section";
import LatestSection from "./Latest-Section/Lastest-Section";
import HelpSection from "./Help-Section";
import TeamsSection from "./Teams-Section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <SlideSection />
      <LatestSection />
      <HelpSection />
      <TeamsSection />
    </div>
  );
}
