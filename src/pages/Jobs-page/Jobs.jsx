// src/pages/ContactUs.jsx
import React from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import VideoSection from "./Video-Section";
import StartCareer from "./StartCareer";

export default function ContactUs() {
  return (
    <div className="flex flex-col bg-black">
      <VideoSection />
      <StartCareer />
    </div>
  );
}
