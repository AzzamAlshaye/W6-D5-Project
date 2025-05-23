import React from "react";

const leaders = [
  {
    name: "Rob Kostich",
    role: "President",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
    alt: "Rob Kostich",
  },
  {
    name: "Josh Taub",
    role: "Chief Operating Officer",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
    alt: "Josh Taub",
  },
  {
    name: "Suzie Carr",
    role: "Chief People Officer",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
    alt: "Suzie Carr",
  },
  {
    name: "Terri Durham",
    role: "SVP & General Counsel",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg",
    alt: "Terri Durham",
  },
  {
    name: "David Stohl",
    role: "Head of Development, Call of Duty",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg",
    alt: "David Stohl",
  },
  {
    name: "Pat Kelly",
    role: "Head of Creative, Call of Duty",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg",
    alt: "Pat Kelly",
  },
  {
    name: "Tyler Bahl",
    role: "SVP, Head of Marketing",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg",
    alt: "Tyler Bahl",
  },
  {
    name: "Natasha Tatarchuk",
    role: "SVP, Chief Technology Officer",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg",
    alt: "Natasha Tatarchuk",
  },
  {
    name: "Matt Cox",
    role: "GM, Call of Duty",
    imgSrc:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg",
    alt: "Matt Cox",
  },
];

export default function OurLeadership() {
  return (
    <section id="about-leadership-team" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2">
          Our Leadership Team
        </h2>
        <div className="border-t border-gray-600 mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="flex flex-col items-center text-center"
            >
              <img
                src={leader.imgSrc}
                alt={leader.alt}
                className="w-60 h-60 rounded-full object-cover mb-4"
              />
              <p className="font-semibold">{leader.name}</p>
              <p className="text-sm text-gray-300">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
