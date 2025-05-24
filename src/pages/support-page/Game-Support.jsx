// src/components/GameSupport.jsx
import React from "react";

const modules = [
  {
    title: "CALL OF DUTY: BLACK OPS 6",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg",
    alt: "CALL OF DUTY: BLACK OPS 6",
  },
  {
    title: "ACCOUNT & SECURITY",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg",
    alt: "Account & Security",
  },
  {
    title: "CALL OF DUTY: WARZONE",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg",
    alt: "Call of Duty: Warzone",
  },
  {
    title: "CALL OF DUTY: MOBILE",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg",
    alt: "Call of Duty: Mobile",
  },
  {
    title: "TONY HAWK'S PRO SKATER 3 + 4",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png",
    alt: "Tony Hawk's Pro Skater 3 + 4",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE III",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg",
    alt: "Call of Duty: Modern Warfare III",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE II",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg",
    alt: "Call of Duty: Modern Warfare II",
  },
  {
    title: "CALL OF DUTY: MODERN WARFARE",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg",
    alt: "Call of Duty: Modern Warfare",
  },
  {
    title: "CALL OF DUTY: BLACK OPS COLD WAR",

    imgSrc:
      "https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg",
    alt: "Call of Duty: Black Ops Cold War",
  },
];

export default function GameSupport() {
  return (
    <section className="bg-[#2c2c2c] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <a
              key={mod.href}
              className="group block overflow-hidden rounded-lg"
            >
              <div className="relative">
                <img
                  src={mod.imgSrc}
                  alt={mod.alt}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <p className="absolute bottom-4 left-4 text-lg font-semibold">
                  {mod.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
