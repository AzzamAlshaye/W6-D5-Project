import React from "react";

export default function OurValuesSection() {
  return (
    <section id="about-our-values" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Section title */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
        <div className="w-full h-px bg-gray-600 mb-8" />

        {/* Values wheel image */}
        <div className="mb-8 w-full max-w-6xl ">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
            alt="Activision Values - It's the People, Think Player First, Champion DE&I, Change the Game, Have Fun"
            className="w-full h-auto mx-auto"
          />
        </div>

        {/* CTA Button */}
        <a
          href="/company/diversity-inclusion#values"
          className="
                    cursor-pointer
                    px-6 py-2 lg:w-64 lg:py-3 text-center
                    border-2 border-[#0a5893] bg-[#0f3a5d] hover:bg-[#0c4c7c]
                    rounded-full
                    uppercase font-semibold
                  "
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
