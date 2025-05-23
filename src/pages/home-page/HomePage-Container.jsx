import React from "react";
import SlideSection from "../home-page/Slide-Section";
import LatestSection from "./Latest-Section/Lastest-Section";
// import OtherSection from '../components/OtherSection';
// import YetAnotherSection from '../components/YetAnotherSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <SlideSection />
      <LatestSection />
      {/* <OtherSection /> */}
      {/* <YetAnotherSection /> */}
    </div>
  );
}
