import React from "react";

export default function SlideVideo() {
  return (
    <section id="slide-video" className="relative bg-black overflow-hidden">
      {/* Full-width video */}
      <div className="w-full">
        <video
          className="w-full h-auto"
          src="https://www.activision.com/cdn/videos/game-ap-look.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div id="slide-video-footer" className="sr-only" />
    </section>
  );
}
