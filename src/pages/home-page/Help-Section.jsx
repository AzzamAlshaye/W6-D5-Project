import React from "react";

export default function HelpSection() {
  return (
    <section
      id="atvi-support"
      className="py-12 bg-black text-white border-t border-gray-100"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-3xl font-bold mb-4">We're here to help!</h3>
          <p className="lg- text-xl font-semibold mb-2">
            Get answers to frequently asked questions, check server status, and
            engage with a support expert
          </p>
          <a
            href="https://support.activision.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-15 py-2 border border-white rounded-4xl hover:bg-[#08497a]  hover:border-[#08497a]  text-white font-semibold text-lg"
          >
            Visit Support
          </a>
        </div>

        {/* Image Column */}
        <div className="lg:w-full relative">
          <img
            src="support-banner.jpg"
            alt="Support Banner"
            className="w-full rounded-lg shadow-lg"
          />
          {/* optional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-lg pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
