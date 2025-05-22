// src/components/NavBar.jsx
import { useState } from "react";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed inset-x-0 top-0 z-50">
      {/* ========== Desktop ========== */}
      <div className="hidden md:flex items-center justify-between container mx-auto px-6 py-4">
        {/* logo + main nav */}
        <div className="flex items-center space-x-12">
          {/* logo */}
          <a href="/" aria-label="Activision home">
            <img
              src="/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png"
              alt="Activision logo"
              className="h-6"
            />
          </a>

          {/* main navigation */}
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <a href="/games" className="hover:underline" role="menuitem">
                  Games
                </a>
              </li>

              {/* About dropdown */}
              <li className="relative">
                <button
                  onClick={() => setAboutOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                  className="flex items-center gap-1 hover:underline"
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
                      <a
                        href="/company/aboutus"
                        className="block hover:underline"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/locations"
                        className="block hover:underline"
                      >
                        Studios &amp; Locations
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/ratings-resources"
                        className="block hover:underline"
                      >
                        Ratings &amp; Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/playtest"
                        className="block hover:underline"
                      >
                        Playtest
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://research.activision.com"
                        className="block hover:underline"
                      >
                        Research
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/diversity-inclusion"
                        className="block hover:underline"
                      >
                        Diversity &amp; Inclusion
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Careers dropdown */}
              <li className="relative">
                <button
                  onClick={() => setCareersOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={careersOpen}
                  className="flex items-center gap-1 hover:underline"
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
                      <a
                        href="https://careers.activision.com"
                        className="block hover:underline"
                      >
                        Search Jobs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://careers.activision.com/students"
                        className="block hover:underline"
                      >
                        Students
                      </a>
                    </li>
                    <li>
                      <a
                        href="/careers/veterans"
                        className="block hover:underline"
                      >
                        Military Veterans
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.activision.com/cdn/activisionblizzard/d20210426-002_ABK_Veterans_Guide_04a-final.pdf"
                        className="block hover:underline"
                      >
                        Veterans Hiring Guide
                      </a>
                    </li>
                    <li>
                      <a href="/careers/faq" className="block hover:underline">
                        FAQ
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Support dropdown */}
              <li className="relative">
                <button
                  onClick={() => setSupportOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={supportOpen}
                  className="flex items-center gap-1 hover:underline"
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
                      <a
                        href="https://support.activision.com/uk/en"
                        className="block hover:underline"
                      >
                        Support Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.activision.com/onlineservices"
                        className="block hover:underline"
                      >
                        Online Services
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* SSO links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://s.activision.com/activision/login?redirectUrl=https://www.activision.com/games"
            className="hover:underline"
          >
            Login
          </a>
          <a
            href="https://s.activision.com/activision/register"
            className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* ========== Mobile ========== */}
      <div className="flex md:hidden items-center justify-between container mx-auto px-6 py-4">
        {/* hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle Mobile Menu"
          aria-expanded={mobileOpen}
          className="flex flex-col justify-between h-6 w-6"
        >
          <span className="block h-0.5 bg-white" />
          <span className="block h-0.5 bg-white" />
          <span className="block h-0.5 bg-white" />
          <span className="block h-0.5 bg-white" />
        </button>

        {/* logo */}
        <a href="/" aria-label="Activision home">
          <img
            src="/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png"
            alt="Activision logo"
            className="h-6"
          />
        </a>
      </div>

      {/* mobile panel */}
      {mobileOpen && (
        <div className="md:hidden bg-black text-white border-t border-gray-800">
          <nav>
            <ul className="space-y-4 px-6 py-6">
              <li>
                <a href="/games" className="block hover:underline">
                  Games
                </a>
              </li>

              {/* About */}
              <li>
                <button
                  onClick={() => setAboutOpen((o) => !o)}
                  className="w-full flex items-center justify-between hover:underline"
                >
                  About
                  <span
                    className={`transform transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {aboutOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <a
                        href="/company/aboutus"
                        className="block hover:underline"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/locations"
                        className="block hover:underline"
                      >
                        Studios &amp; Locations
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/ratings-resources"
                        className="block hover:underline"
                      >
                        Ratings &amp; Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/playtest"
                        className="block hover:underline"
                      >
                        Playtest
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://research.activision.com"
                        className="block hover:underline"
                      >
                        Research
                      </a>
                    </li>
                    <li>
                      <a
                        href="/company/diversity-inclusion"
                        className="block hover:underline"
                      >
                        Diversity &amp; Inclusion
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Careers */}
              <li>
                <button
                  onClick={() => setCareersOpen((o) => !o)}
                  className="w-full flex items-center justify-between hover:underline"
                >
                  Careers
                  <span
                    className={`transform transition-transform ${
                      careersOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {careersOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <a
                        href="https://careers.activision.com"
                        className="block hover:underline"
                      >
                        Search Jobs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://careers.activision.com/students"
                        className="block hover:underline"
                      >
                        Students
                      </a>
                    </li>
                    <li>
                      <a
                        href="/careers/veterans"
                        className="block hover:underline"
                      >
                        Military Veterans
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.activision.com/cdn/activisionblizzard/d20210426-002_ABK_Veterans_Guide_04a-final.pdf"
                        className="block hover:underline"
                      >
                        Veterans Hiring Guide
                      </a>
                    </li>
                    <li>
                      <a href="/careers/faq" className="block hover:underline">
                        FAQ
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Support */}
              <li>
                <button
                  onClick={() => setSupportOpen((o) => !o)}
                  className="w-full flex items-center justify-between hover:underline"
                >
                  Support
                  <span
                    className={`transform transition-transform ${
                      supportOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {supportOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <a
                        href="https://support.activision.com/uk/en"
                        className="block hover:underline"
                      >
                        Support Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.activision.com/onlineservices"
                        className="block hover:underline"
                      >
                        Online Services
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* SSO */}
          <div className="flex flex-col space-y-3 px-6 pb-6 border-t border-gray-800">
            <a
              href="https://s.activision.com/activision/login?redirectUrl=https://www.activision.com/games"
              className="block hover:underline"
            >
              Login
            </a>
            <a
              href="https://s.activision.com/activision/register"
              className="block hover:underline"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
