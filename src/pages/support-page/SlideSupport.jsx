// src/components/SlideSupport.jsx
import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    bg: "Slide-Support1.jpg",
    logo: "https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6-S3R-logo-lockup.png",
    links: [
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED`,
      },
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
  {
    id: 2,
    bg: "Slide-Support2.jpg",
    logo: "https://support.activision.com/content/dam/atvi/support/home/carousel/hero/WZ-logo-wh.png",
    links: [
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `WARZONE INSTALLATION AND SETUP`,
      },
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
  {
    id: 3,
    bg: "Slide-Support3.jpg",
    logo: "https://support.activision.com/content/dam/atvi/support/home/carousel/hero/THPS34_LOGO_NEG.png",
    links: [
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `Tony Hawk’s Pro Skater 3 + 4 FAQ`,
      },
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Tony Hawk’s Pro Skater 3 + 4 Code Support`,
      },
    ],
  },
  {
    id: 4,
    bg: "Slide-Support4.png",
    logo: "https://support.activision.com/content/dam/atvi/support/home/carousel/hero/MWIII-logo-1a.png",
    links: [
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `MODERN WARFARE III INSTALLATION AND SETUP`,
      },
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
  {
    id: 5,
    bg: "Slide-Support5.jpg",
    logo: "https://support.activision.com/content/dam/atvi/support/home/carousel/hero/MWII-logo-2023.png",
    links: [
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `MODERN WARFARE II INSTALLATION AND SETUP`,
      },
      {
        icon: "https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
];

export default function SlideSupport() {
  const [active, setActive] = useState(0);
  const timer = useRef(null);

  // Auto-advance every 6 seconds
  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer.current);
  }, []);

  const prev = () => {
    clearInterval(timer.current);
    setActive((a) => (a - 1 + slides.length) % slides.length);
  };
  const next = () => {
    clearInterval(timer.current);
    setActive((a) => (a + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-700
            ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          style={{ backgroundImage: `url(${s.bg})` }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          {/* content */}
          <div className="relative container mx-auto h-full flex flex-col justify-center text-white px-4 lg:px-0">
            <div className="mb-8">
              <img
                src={s.logo}
                alt=""
                className="h-16 lg:h-60 object-contain mx-auto lg:mx-0"
              />
            </div>
            <div className="flex flex-col space-y-4    ">
              {s.links.map((link, idx) => (
                <button
                  key={idx}
                  className="flex items-center space-x-4 hover:scale-102 transition"
                >
                  <img src={link.icon} alt="" className="h-6 lg:h-8 w-auto" />
                  <span className="uppercase font-semibold text-sm lg:text-base">
                    {link.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* arrows */}
      <button
        onClick={prev}
        className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-2xl p-2 bg-black/40 rounded-full"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={next}
        className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-2xl p-2 bg-black/40 rounded-full"
      >
        <FiChevronRight />
      </button>

      {/* dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              clearInterval(timer.current);
              setActive(idx);
            }}
            className={`
              w-3 h-3 rounded-full transition-colors
              ${idx === active ? "bg-white" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
