import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const slides = [
  {
    videoSrc:
      "https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4",
    logoSrc: "BO6.png",
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
      "https://www.activision.com/content/dam/atvi/tony-hawk/chicago/common/PC_LOGO_PRIMARY_NEG_241121.svg",
    altLogo: "Tony Hawk Pro Skater 3+4",
    copy: "Available for Xbox Series X|S, Xbox One, PlayStation 4 and 5, Steam, Battle.net, Microsoft PC Store, and Nintendo Switch.",
    ctas: [
      { text: "Pre-Order Now", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc:
      "https://www.activision.com/content/dam/atvi/tony-hawk/chicago/common/esrb-rating-en.svg",
    altRating: "Teen",
  },
  {
    videoSrc: "https://www.activision.com/cdn/crash/crash_team_rumble.mp4",
    logoSrc:
      "https://www.activision.com/content/dam/atvi/Crash/crash-touchui/lava/common/crash-team-rumble-logo.png",
    altLogo: "Crash Team Rumble",
    copy: "Get ready to dash, jump, slide, and bounce\ninto an all-new way to Crash",
    ctas: [
      { text: "Get Now", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc:
      "https://www.activision.com/content/dam/atvi/global/ratings/esrb/Ratingsymbol_e10.png",
    altRating: "Rating Pending",
  },

  {
    videoSrc:
      "https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4",
    logoSrc:
      "https://www.activision.com/content/dam/atvi/callofduty/mobile/home/hero/cod-mobile-logo-v2.png",
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
  {
    videoSrc:
      "https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4",
    logoSrc: "tonyHawk.png",
    altLogo: "Tony Hawk Pro Skater 1+2",
    copy: "Available Now For PS4™, XBOX One® & PC!",
    ctas: [
      { text: "Get Now", href: "#" },
      { text: "Visit Site", href: "#" },
    ],
    ratingSrc: "tonyHawk-rating.png",
    altRating: "Teen",
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
      {/* Slides */}
      <div
        id="atvi-hero-inner-container"
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-full flex-shrink-0">
            {/* Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

            {/* Content */}
            <div
              className="
                relative z-10 h-full
                flex flex-col justify-center
                px-4 sm:px-8 md:px-12 lg:px-10 lg:left-50
                max-w-lg
                mx-auto sm:mx-0
                items-center sm:items-start
                text-center sm:text-left
                text-white
              "
            >
              <img
                src={slide.logoSrc}
                alt={slide.altLogo}
                className="
                  mb-4
                  max-w-xs sm:max-w-sm md:max-w-md
                "
              />

              <p
                className="
                  mb-4
                  text-xl sm:text-2xl md:text-3xl
                  font-medium
                  whitespace-pre-line
                  text-center
                "
              >
                {slide.copy}
              </p>

              <div
                className="
                  flex flex-col sm:flex-row
                  items-center sm:items-start
                  space-y-3 sm:space-y-0 sm:space-x-6
                  mb-6
                "
              >
                <a
                  href={slide.ctas[0].href}
                  className="
                    cursor-pointer
                    px-6 py-2 lg:w-72 lg:py-3 text-center
                    border-2 border-[#0a5893] bg-[#0f3a5d] hover:bg-[#0c4c7c]
                    rounded-full
                    uppercase font-semibold
                  "
                >
                  {slide.ctas[0].text}
                </a>
                <a
                  href={slide.ctas[1].href}
                  className="
                    cursor-pointer
                    px-6 py-2 lg:w-72 lg:py-3 text-center
                    border border-white hover:bg-white hover:text-black
                    rounded-full
                    uppercase font-semibold
                  "
                >
                  {slide.ctas[1].text}
                </a>
              </div>

              <img
                src={slide.ratingSrc}
                alt={slide.altRating}
                className="h-10 lg:h-15"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        className="
          absolute bottom-4 sm:bottom-6
          left-1/2 transform -translate-x-1/2
          flex items-center space-x-3
          bg-black/50 backdrop-blur
          px-10 py-5  lg:px-30 lg:py-5
          rounded-full
        "
      >
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="
          absolute left-2 sm:left-4
          top-1/2 transform -translate-y-1/2
          bg-black/50 backdrop-blur 
          text-white w-8 h-8 sm:w-10 sm:h-10
          rounded-full flex items-center justify-center
          cursor-pointer
        "
        >
          <IoChevronBack size={20} />
        </button>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`
              w-2 sm:w-3 h-2 sm:h-3 rounded-full
              cursor-pointer
              ${idx === current ? "bg-white" : "bg-white/50"}
            `}
          />
        ))}
        <button
          onClick={nextSlide}
          className="
          absolute right-2 sm:right-4
          top-1/2 transform -translate-y-1/2
          bg-black bg-opacity-50 hover:bg-opacity-75
          text-white w-8 h-8 sm:w-10 sm:h-10
          rounded-full flex items-center justify-center
          cursor-pointer
        "
        >
          <IoChevronForward size={20} />
        </button>
      </div>
    </section>
  );
}
