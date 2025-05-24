import React, { useRef, useState } from "react";
import { IoPause, IoPlay } from "react-icons/io5";

export default function VideoSection() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [mobilePaused, setMobilePaused] = useState(false);
  const [desktopPaused, setDesktopPaused] = useState(false);

  const toggleMobilePlayback = () => {
    if (!mobileVideoRef.current) return;
    if (mobilePaused) {
      mobileVideoRef.current.play();
    } else {
      mobileVideoRef.current.pause();
    }
    setMobilePaused((paused) => !paused);
  };

  const toggleDesktopPlayback = () => {
    if (!desktopVideoRef.current) return;
    if (desktopPaused) {
      desktopVideoRef.current.play();
    } else {
      desktopVideoRef.current.pause();
    }
    setDesktopPaused((paused) => !paused);
  };

  return (
    // pushes section down by navbar height (adjust pt-16 as needed)
    <section id="video-section" className="relative w-full pt-16">
      {/* Desktop video (lg+) */}
      <div className="hidden lg:block relative w-full h-screen overflow-hidden">
        <video
          ref={desktopVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
          playsInline
          loop
          muted
          autoPlay
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Play/Pause Button for Desktop */}
        <button
          onClick={toggleDesktopPlayback}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
        >
          {desktopPaused ? <IoPlay size={24} /> : <IoPause size={24} />}
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://careers.activision.com/search-results"
            className="px-6 py-3 border border-green-500 text-white font-semibold hover:bg-green-600 transition bg-[#2b2b2b]"
          >
            SEARCH JOBS
          </a>
        </div>
      </div>

      {/* Mobile video (<lg) */}
      <div className="block lg:hidden relative w-full h-64 overflow-hidden">
        <video
          ref={mobileVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
          playsInline
          loop
          muted={!mobilePaused}
          autoPlay={!mobilePaused}
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Play/Pause Button for Mobile */}
        <button
          onClick={toggleMobilePlayback}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
        >
          {mobilePaused ? <IoPlay size={24} /> : <IoPause size={24} />}
        </button>
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://careers.activision.com/search-results"
            className="px-6 py-3 border border-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            SEARCH JOBS
          </a>
        </div>
      </div>
    </section>
  );
}
