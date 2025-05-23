// src/components/AboutHeroSection.jsx
import React from "react";

export default function AboutHeroSection() {
  return (
    // give the section a height on lg+
    <section
      id="about-hero"
      className="relative w-full overflow-hidden h-64 lg:h-[60vh]"
    >
      {/* Desktop hero (lg+) */}
      <div className="hidden lg:block absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('AboutHeroSection-Header.jpg')",
          }}
        />
        {/* optional dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Mobile hero (<lg) */}
      <div className="block lg:hidden relative h-64">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('AboutHeroSection-Header.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}
