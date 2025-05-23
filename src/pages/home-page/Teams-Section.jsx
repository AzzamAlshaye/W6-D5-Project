import React from "react";

export default function TeamsSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Desktop background image + overlays */}
      <div className="hidden lg:block absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('joinus-banner-img-spyro.png')",
          }}
        />
        {/* base dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* corner radial shadows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.8),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.8),transparent)]" />
        </div>
      </div>

      {/* Mobile header image + overlays */}
      <div className="block lg:hidden relative w-full h-64">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('joinus-banner-img-spyro.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.8),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.8),transparent)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-12 pb-16 flex flex-col lg:flex-row  lg:justify-between lg:items-center lg:space-x-12">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0 lg:ml-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">
            HAVE FUN
          </h2>
          <p className="text-lg text-white mb-6">
            Learn More About Job Opportunities
          </p>
          <a
            href="https://careers.activision.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-15 py-2 border border-white rounded-4xl hover:bg-[#08497a]  hover:border-[#08497a]  text-white font-semibold text-lg transition"
          >
            JOIN US
          </a>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/6 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
            OUR TEAMS
          </h3>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-y-2  text-sm lg:text-base">
            <li>Game Design</li>
            <li>Art &amp; Animation</li>
            <li>Brand Management</li>
            <li>Production</li>
            <li>Quality Assurance</li>
            <li>Customer Support</li>
            <li>Studio Operations</li>
            <li>Programming</li>
            <li>Finance &amp; Accounting</li>
            <li>Human Resources</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
