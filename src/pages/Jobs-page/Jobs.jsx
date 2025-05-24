// src/pages/ContactUs.jsx
import React from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import VideoSection from "./Video-Section";
import StartCareer from "./StartCareer";
import ExploreWorld from "./ExploreWorld";
import SlideVideo from "./Slide-Video";

export default function ContactUs() {
  return (
    <div className="flex flex-col bg-black">
      <VideoSection />
      <StartCareer />
      <ExploreWorld />
      <SlideVideo />
    </div>
  );
}
