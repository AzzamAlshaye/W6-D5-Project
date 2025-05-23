import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function BlogTile({ article }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div
      className="group relative bg-gradient-to-b from-[#343434] to-[#000000] rounded-lg overflow-hidden shadow-md flex flex-col cursor-pointer transition-all duration-300"
      data-game={article.categories[0]}
      onClick={toggleOpen}
    >
      {/* image */}
      <div
        className="h-56 bg-center bg-cover"
        style={{ backgroundImage: `url(${article.imgUrl})` }}
      />

      {/* text container */}
      <div className="p-6 flex-1 flex flex-col">
        <time className="text-xs text-gray-400 uppercase">{article.date}</time>
        <h3 className="mt-2 text-lg font-semibold text-white">
          {article.title}
        </h3>

        {/* divider */}
        <div className="mt-4 w-12 border-b-2 border-blue-500" />

        {/* expandable content */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out mt-4
            ${open ? "max-h-96" : "max-h-0"} lg:group-hover:max-h-96
          `}
        >
          <p className="text-gray-300 text-sm">{article.description}</p>
          <div className="mt-4">
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-blue-500 font-semibold"
              onClick={(e) => e.stopPropagation()}
            >
              Read More
              <FaChevronRight className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
