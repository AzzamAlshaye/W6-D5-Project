import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const slides = [
  {
    videoSrc:
      "https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4",
    logoSrc:
      "/content/dam/atvi/tony-hawk/alcatraz/common/logos/Tony_Hawk-ProSkater1+2-logo.png",
    altLogo: "Tony Hawk Pro Skater 1+2",
    copy: "Available Now For PS4™, XBOX One® & PC!",
    ctas: [
      { text: "Get Now", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc: "/content/dam/atvi/global/ratings/esrb/footer-esrb-thps-en.png",
    altRating: "Teen",
  },
  {
    videoSrc:
      "https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4",
    logoSrc:
      "/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png",
    altLogo: "Black Ops 6 Logo",
    copy: "Forced to go rogue. Hunted from Within.\nThis is Black Ops 6.",
    ctas: [
      { text: "PLAY WITH GAME PASS", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc:
      "https://imgs.callofduty.com/content/dam/atvi/global/ratings/esrb/cod-hub-esrb-en.png",
    altRating: "ESRB Rating",
  },
  {
    videoSrc:
      "https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4",
    logoSrc:
      "/content/dam/atvi/tony-hawk/chicago/common/PC_LOGO_PRIMARY_NEG_241121.svg",
    altLogo: "Tony Hawk Pro Skater 3+4",
    copy: "Available for Xbox Series X|S, Xbox One, PlayStation 4 and 5, Steam, Battle.net, Microsoft PC Store, and Nintendo Switch.",
    ctas: [
      { text: "Pre-Order Now", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc: "/content/dam/atvi/tony-hawk/chicago/common/esrb-rating-en.svg",
    altRating: "Teen",
  },
  {
    videoSrc: "https://www.activision.com/cdn/crash/crash_team_rumble.mp4",
    logoSrc:
      "/content/dam/atvi/Crash/crash-touchui/lava/common/crash-team-rumble-logo.png",
    altLogo: "Crash Team Rumble",
    copy: "Get ready to dash, jump, slide, and bounce\ninto an all-new way to Crash",
    ctas: [
      { text: "Get Now", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc: "/content/dam/atvi/global/ratings/esrb/Ratingsymbol_e10.png",
    altRating: "Rating Pending",
  },
  {
    videoSrc:
      "https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4",
    logoSrc:
      "/content/dam/atvi/callofduty/mobile/home/hero/cod-mobile-logo-v2.png",
    altLogo: "Call of Duty Mobile",
    copy: "Available Now For iOS and Android!",
    ctas: [
      { text: "Download Now", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc:
      "https://imgs.callofduty.com/content/dam/atvi/global/ratings/esrb/cod-hub-esrb-en.png",
    altRating: "Mature 17+",
  },
];

export default function AtviHeroContainer() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <section
      id="atvi-hero-container"
      className="relative w-full h-screen overflow-hidden"
      data-analytics-container="hero"
    >
      {/* sliding wrapper */}
      <div
        id="atvi-hero-inner-container"
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-full flex-shrink-0">
            {/* background video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

            {/* centered content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
              <img
                src={slide.logoSrc}
                alt={slide.altLogo}
                className="mb-6 max-w-md"
              />
              <p className="mb-6 whitespace-pre-line text-2xl md:text-3xl font-medium">
                {slide.copy}
              </p>
              <div className="flex space-x-6">
                <a
                  href={slide.ctas[0].href}
                  className="cursor-pointer px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full uppercase font-semibold"
                >
                  {slide.ctas[0].text}
                </a>
                <a
                  href={slide.ctas[1].href}
                  className="cursor-pointer px-8 py-3 border border-white hover:bg-white hover:text-black rounded-full uppercase font-semibold"
                >
                  {slide.ctas[1].text}
                </a>
              </div>
              <div className="mt-6">
                <img
                  src={slide.ratingSrc}
                  alt={slide.altRating}
                  className="h-8"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* prev / next arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      >
        <IoChevronBack size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      >
        <IoChevronForward size={24} />
      </button>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
