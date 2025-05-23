import React from "react";

export default function AboutOurStorySection() {
  return (
    <section id="about-our-story" className="bg-black text-white py-50">
      <div className="container mx-auto px-4 flex flex-col space-y-16">
        {/* Our Mission */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mission</h2>
          <div className="w-full h-px bg-gray-600 mb-8" />
          <p className="max-w-6xl text-base lg:text-sm font-semibold leading-relaxed">
            At Activision, we strive to create the most iconic brands in gaming
            and entertainment. We’re driven by our mission to deliver unrivaled
            gaming experiences for the world to enjoy, together. Home to iconic
            franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™
            Pro Skater™, we’re a global leader in interactive entertainment. Our
            goal? Delight millions with innovative, fun, and engaging games.
            With a legacy of success, we’re pushing boundaries with cutting-edge
            technology and inclusive practices. Join us in delivering
            unforgettable entertainment and seize the chance to level up your
            career.
          </p>
        </div>

        {/* Activate Your Future */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Activate Your Future
          </h2>
          <div className="w-full h-px bg-gray-600 mb-8" />
          <div className="max-w-6xl text-base lg:text-lg leading-relaxed space-y-4">
            <p>
              We unite our global player community with epic entertainment,
              focusing on three core pillars:
            </p>
            <ul className=" flex flex-col gap-2 text-sm">
              <li>
                <span className="font-semibold">People</span> - fostering talent
                and learning opportunities.
              </li>
              <li>
                <span className="font-semibold">Innovation</span> - consistently
                pushing to iterate and evolve.
              </li>
              <li>
                <span className="font-semibold">Excellence</span> - delivering
                high-quality games, consistently year in and year out.
              </li>
            </ul>
            <p className=" w-full ">
              Join us at Activision, where inclusivity thrives, and together we
              shape the future of entertainment for our players. Explore open
              roles now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
