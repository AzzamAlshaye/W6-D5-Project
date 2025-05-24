import React from "react";

const categories = [
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem11-1710455685013.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem12-1710455727924.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem13-1710455855824.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem15-1710456129634.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem16-1710456257523.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem17-1710456307621.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem18-1710456364531.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem19-1710456408214.png",
    href: "#",
  },
  {
    imageSrc:
      "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem14-1710456001039.png",
    href: "#",
  },
];

export default function StartCareer() {
  return (
    <section id="start-career" className="bg-[#121212] text-white py-16">
      <div className="max-w-8xl mx-auto px-4 xl:px-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          START YOUR GAME CHANGING CAREER
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={cat.imageSrc}
                alt={`Category ${idx + 1}`}
                className="h-18 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
