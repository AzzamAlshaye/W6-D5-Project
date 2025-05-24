// src/components/BeTheFirst.jsx
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const jobs = [
  {
    title: "Senior Gameplay Engineer - High Moon Studios",
    category: "Programming / Software Engineering",
    id: "R024108",
    description:
      "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024108EXTERNAL",
  },
  {
    title: "Lead Analytics Engineer",
    category: "Data Analytics",
    id: "R024154",
    description:
      "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024154EXTERNAL",
  },
  {
    title: "Expert Animation Engineer - Infinity Ward",
    category: "Programming / Software Engineering",
    id: "R024307",
    description:
      "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR024307EXTERNAL",
  },
  {
    title: "Senior AI Animator - Infinity Ward",
    category: "Animation",
    id: "R022959",
    description:
      "Use motion capture and hand-keyed techniques to create high-fidelity NPC animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR022959EXTERNAL",
  },
  {
    title: "Level Designer",
    category: "Game / Level Design",
    id: "R025221",
    description:
      "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
    link: "https://careers.activision.com/apply?jobSeqNo=ACPUUSR025221EXTERNAL",
  },
];

export default function BeTheFirst() {
  return (
    <section id="be-the-first" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Be the First to Apply
        </h2>

        {/* on xl: two columns, bigger gap */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="
                relative  
                bg-white text-black rounded-lg  
                p-6 xl:p-10                /* more padding on xl */
                shadow-lg  
                w-full 
                xl:max-w-2xl xl:mx-auto   /* cap each card at 2xl on xl */
                flex flex-col
              "
            >
              {/* Heart icon */}
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                <FaRegHeart size={20} />
              </button>

              {/* Title & meta */}
              <h3 className="text-xl font-semibold mb-1 hover:text-[#0668af] cursor-pointer">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600">
                {job.category} &middot; {job.id}
              </p>

              {/* Description (clamped) */}
              <p
                className="mt-4 text-sm text-gray-700 leading-relaxed flex-grow overflow-hidden"
                style={{
                  WebkitLineClamp: 3,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {job.description}
              </p>

              {/* Apply button */}
              <button
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6 w-40 
                  bg-black text-white font-semibold  
                  px-6 py-2  
                  border border-[#3e8916]  
                  rounded  
                  hover:bg-[#3e8916] hover:border-[#3e8916]  
                  transition-colors cursor-pointer
                "
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
