import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function BlogTile({ article }) {
  return (
    <div
      className="relative bg-gradient-to-b from-[#343434] to-[#000000] rounded-lg overflow-hidden shadow-md flex flex-col"
      data-game={article.categories[0]}
    >
      {/* make the entire card clickable */}
      <a
        href={article.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Read more: ${article.title}`}
        className="absolute inset-0 z-10"
      />

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

        {/* description */}
        <p className="mt-4 text-gray-300 flex-1">{article.description}</p>

        {/* Read More */}
        <div className="mt-6">
          <a
            href={article.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-blue-500 font-semibold"
          >
            Read More
            <FaChevronRight className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
