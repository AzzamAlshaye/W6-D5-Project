import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    bg: "/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg",
    logo: "/content/dam/atvi/support/home/carousel/hero/BO6-S3R-logo-lockup.png",
    links: [
      {
        href: "/uk/en/black-ops-6/articles/black-ops-6-warzone-seasons",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED`,
      },
      {
        href: "/uk/en/black-ops-6",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
  {
    id: 2,
    bg: "/content/dam/atvi/support/home/carousel/hero/WZV-home-banner-v3.jpg",
    logo: "/content/dam/atvi/support/home/carousel/hero/WZ-logo-wh.png",
    links: [
      {
        href: "/uk/en/warzone-2/articles/warzone-2-installation-and-setup",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `WARZONE INSTALLATION AND SETUP`,
      },
      {
        href: "/uk/en/warzone-2",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
  {
    id: 3,
    bg: "/content/dam/atvi/support/home/carousel/hero/THPS34_home_01.jpg",
    logo: "/content/dam/atvi/support/home/carousel/hero/THPS34_LOGO_NEG.png",
    links: [
      {
        href: "/uk/en/tony-hawks-pro-skater-3-4/articles/tony-hawks-pro-skater-3-4-faq",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `Tony Hawk’s Pro Skater 3 + 4 FAQ`,
      },
      {
        href: "/uk/en/tony-hawks-pro-skater-3-4/articles/tony-hawks-pro-skater-3-4-code-support",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Tony Hawk’s Pro Skater 3 + 4 Code Support`,
      },
    ],
  },
  {
    id: 4,
    bg: "/content/dam/atvi/support/home/carousel/hero/MWIII-Hero-ban-beta.png",
    logo: "/content/dam/atvi/support/home/carousel/hero/MWIII-logo-1a.png",
    links: [
      {
        href: "/uk/en/modern-warfare-iii/articles/modern-warfare-iii-installation-and-setup",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `MODERN WARFARE III INSTALLATION AND SETUP`,
      },
      {
        href: "/uk/en/modern-warfare-iii",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
  {
    id: 5,
    bg: "/content/dam/atvi/support/home/carousel/hero/MWII-PS-HERO.jpg",
    logo: "/content/dam/atvi/support/home/carousel/hero/MWII-logo-2023.png",
    links: [
      {
        href: "/uk/en/modern-warfare-ii/articles/modern-warfare-ii-installation-and-setup",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_game.png",
        text: `MODERN WARFARE II INSTALLATION AND SETUP`,
      },
      {
        href: "/uk/en/modern-warfare-ii",
        icon: "/content/dam/atvi/support/home/carousel/icons/icon_support.png",
        text: `Browse the support page`,
      },
    ],
  },
];

export default function Test() {
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
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-700
            ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          style={{ backgroundImage: `url(${s.bg})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto h-full flex flex-col justify-center text-white px-4 lg:px-0">
            <div className="mb-8">
              <img
                src={s.logo}
                alt=""
                className="h-16 lg:h-24 object-contain mx-auto lg:mx-0"
              />
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-6 lg:flex-row lg:space-x-12 lg:items-center">
              {s.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center space-x-4 hover:underline"
                >
                  <img src={link.icon} alt="" className="h-6 lg:h-8 w-auto" />
                  <span className="uppercase font-semibold text-sm lg:text-base">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next arrows (hidden < lg) */}
      <button
        onClick={prev}
        className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black/40 rounded-full"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={next}
        className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black/40 rounded-full"
      >
        <FiChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
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
