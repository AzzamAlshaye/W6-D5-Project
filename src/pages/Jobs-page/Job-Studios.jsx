import React from "react";

const studios = [
  {
    name: "Treyarch",
    link: "https://www.treyarch.com",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png",
  },
  {
    name: "Infinity Ward",
    link: "https://www.infinityward.com",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png",
  },
  {
    name: "High Moon Studios",
    link: "https://www.highmoonstudios.com",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png",
  },
  {
    name: "Beenox",
    link: "https://beenox.com/en/",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png",
  },
  {
    name: "Sledgehammer Games",
    link: "https://www.sledgehammergames.com",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png",
  },
  {
    name: "Raven Software",
    link: "https://www.ravensoftware.com",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png",
  },
  {
    name: "Toys for Bob",
    link: "https://www.toysforbob.com",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png",
  },
  {
    name: "Activision Shanghai Studio",
    link: "#",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png",
  },
  {
    name: "Demonware",
    link: "https://www.demonware.net",
    logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png",
  },
];

export default function JobsStudios() {
  return (
    <section id="about-our-studios" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-20">
          Our Studios
        </h2>

        {/* Studios Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-40 items-center">
          {studios.map((studio, idx) => {
            const isLast = idx === studios.length - 1;
            return (
              <a
                key={studio.name}
                href={studio.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex justify-center ${
                  isLast ? "col-span-2 sm:col-auto" : ""
                }`}
              >
                <img
                  className="h-16 sm:h-20 object-contain filter brightness-50 hover:brightness-100 transition-all duration-300"
                  src={studio.logo}
                  alt={studio.name}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
