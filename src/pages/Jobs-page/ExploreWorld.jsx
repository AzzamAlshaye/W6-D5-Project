import React from "react";

const exploreItems = [
  {
    title: "Our Locations",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
    link: "/company/locations",
  },
  {
    title: "DE&I",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg",
    link: "/company/diversity-inclusion",
  },
  {
    title: "Early Careers",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg",
    link: "/early-careers",
  },
  {
    title: "Mission & Talent Brand",
    imgSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png",
    link: "/we-are-activision",
  },
];

export default function ExploreWorld() {
  return (
    <section id="explore-world" className="bg-[#121212] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          EXPLORE OUR WORLD
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exploreItems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg overflow-hidden shadow-lg flex flex-col bg-black"
            >
              <div
                className="h-64 sm:h-72 lg:h-80 xl:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imgSrc})` }}
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <button
                  href={item.link}
                  className="inline-block px-6 py-2 border border-white rounded-full uppercase text-sm font-medium hover:bg-[#08497a]  transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
