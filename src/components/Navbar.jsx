// src/components/NavBar.jsx
import { useState } from "react";
import { Link } from "react-router"; // make sure you have react-router
import { IoMenuSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header className="bg-black/50 backdrop-blur  text-white fixed inset-x-0 top-0 z-50">
      {/* ===== Desktop / Tablet (≥lg) ===== */}
      <div className="hidden lg:flex items-center justify-around container mx-auto px-6 py-4">
        <div className="flex items-center space-x-12">
          {/* Logo → Home */}
          <Link to="/" aria-label="Activision home">
            <img src="logo.png" alt="Activision logo" className="h-8" />
          </Link>

          {/* Main nav */}
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to=""
                  className="text-[#b3b6b7] hover:text-white font-bold"
                >
                  Games
                </Link>
              </li>

              {/* About */}
              <li className="relative">
                <button
                  onClick={() => setAboutOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                  className="flex items-center gap-1 text-[#b3b6b7] hover:text-white font-bold cursor-pointer"
                >
                  About
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.242a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {aboutOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-black ring-1 ring-white/20 space-y-1 p-3">
                    <li>
                      <Link to="/about-us" className="block hover:underline ">
                        About Us
                      </Link>
                    </li>
                    {/* other stubs… */}
                  </ul>
                )}
              </li>

              {/* Careers */}
              <li className="relative">
                <button
                  onClick={() => setCareersOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={careersOpen}
                  className="flex items-center gap-1 text-[#b3b6b7] hover:text-white font-bold cursor-pointer"
                >
                  Careers
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      careersOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.242a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {careersOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-black ring-1 ring-white/20 space-y-1 p-3">
                    <li>
                      <Link to="/jobs" className="block hover:underline">
                        Search Jobs
                      </Link>
                    </li>
                    {/* other stubs… */}
                  </ul>
                )}
              </li>

              {/* Support */}
              <li className="relative">
                <button
                  onClick={() => setSupportOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={supportOpen}
                  className="flex items-center gap-1 text-[#b3b6b7] hover:text-white font-bold cursor-pointer"
                >
                  Support
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      supportOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.242a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {supportOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-black ring-1 ring-white/20 space-y-1 p-3">
                    <li>
                      <Link to="/support" className="block hover:underline">
                        Support Home
                      </Link>
                    </li>
                    {/* other stubs… */}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* SSO (external) */}
        <div className="flex items-center space-x-6">
          <button className="px-4 py-0.5 border-2 border-[#0a5893] bg-[#0f3a5d] rounded-3xl font-extrabold hover:bg-[#0c4c7c] cursor-pointer">
            Sign Up
          </button>
          <button className="text-[#a6a9aa] font-bold cursor-pointer">
            Login
          </button>
        </div>
      </div>

      {/* ===== Mobile (≤lg) ===== */}
      <div className="flex lg:hidden items-center relative container mx-auto px-6 py-8 justify-center">
        {/* Burger on the left */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle Mobile Menu"
          aria-expanded={mobileOpen}
          className="absolute left-1 flex flex-col justify-between h-15 w-15"
        >
          <IoMenuSharp className="text-8xl" />
        </button>

        {/* Logo centered */}
        <Link
          to="/"
          aria-label="Activision home"
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <img src="logo.png" alt="Activision logo" className="h-8" />
        </Link>
      </div>

      {/* Full-height mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-black text-white border-t border-gray-800 h-screen overflow-auto">
          <nav>
            <ul className="space-y-4 px-6 py-6">
              <li>
                <Link
                  to=""
                  className="block hover:underline pb-6 border-b border-gray-400"
                >
                  Games
                </Link>
              </li>

              {/* About (mobile uses click only) */}
              <li>
                <button
                  onClick={() => setAboutOpen((o) => !o)}
                  className="w-full flex items-center justify-between hover:underline pb-6 border-b border-gray-400"
                >
                  About{" "}
                  <span className={aboutOpen ? "rotate-180" : ""}>
                    {" "}
                    <MdKeyboardArrowDown className="text-2xl" />
                  </span>
                </button>
                {aboutOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link to="/about-us" className="block hover:underline">
                        About Us
                      </Link>
                    </li>
                    {/* other stubs… */}
                  </ul>
                )}
              </li>

              {/* Careers */}
              <li>
                <button
                  onClick={() => setCareersOpen((o) => !o)}
                  className="w-full flex items-center justify-between hover:underline pb-6 border-b border-gray-400"
                >
                  Careers{" "}
                  <span className={careersOpen ? "rotate-180" : ""}>
                    <MdKeyboardArrowDown className="text-2xl" />
                  </span>
                </button>
                {careersOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link to="/jobs" className="block hover:underline">
                        Search Jobs
                      </Link>
                    </li>
                    {/* other stubs… */}
                  </ul>
                )}
              </li>

              {/* Support */}
              <li>
                <button
                  onClick={() => setSupportOpen((o) => !o)}
                  className="w-full flex items-center justify-between hover:underline pb-6 border-b border-gray-400"
                >
                  Support{" "}
                  <span className={supportOpen ? "rotate-180" : ""}>
                    <MdKeyboardArrowDown className="text-2xl" />
                  </span>
                </button>
                {supportOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link
                        to="/support-home"
                        className="block hover:underline"
                      >
                        Support Home
                      </Link>
                    </li>
                    {/* other stubs… */}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* SSO */}
          <div className="flex items-center space-x-6 justify-center py-6">
            <button className="px-4 py-0.5 border-2 border-[#0a5893] bg-[#0f3a5d] rounded-3xl font-extrabold hover:bg-[#0c4c7c]">
              Sign Up
            </button>
            <button className="text-[#a6a9aa] font-bold">Login</button>
          </div>
        </div>
      )}
    </header>
  );
}
