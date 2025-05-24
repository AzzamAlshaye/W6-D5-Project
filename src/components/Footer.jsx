// src/components/Footer.jsx
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiChevronUp, FiExternalLink, FiCheckCircle } from "react-icons/fi";

const popularGames = [
  { name: "Call of Duty", href: "https://www.callofduty.com" },
  { name: "Tony Hawk Pro Skater", href: "https://www.tonyhawkthegame.com" },
  { name: "Crash Bandicoot", href: "https://www.crashbandicoot.com" },
  { name: "Spyro", href: "https://www.spyrothedragon.com" },
  { name: "Sekiro", href: "https://www.sekirothegame.com" },
];

const companyLinks = [
  { name: "Press", href: "https://press.activision.com/" },
  { name: "Research", href: "https://research.activision.com" },
  { name: "Activision Blizzard", href: "https://www.activisionblizzard.com" },
  { name: "Contact Us", href: "https://support.activision.com/contact_us" },
];

const legalLinks = [
  {
    name: "Terms of Use",
    href: "https://www.activision.com/legal/terms-of-use",
  },
  {
    name: "Privacy Policy",
    href: "https://www.activision.com/legal/privacy-policy",
  },
  {
    name: "Cookie Policy",
    href: "https://www.activision.com/legal/cookie-policy",
  },
  { name: "Cookie Settings", isButton: true },
  {
    name: "Online Safety",
    href: "https://www.activision.com/legal/online-safety-guide",
  },
  {
    name: "Applicant Privacy Policy",
    href: "https://www.activision.com/legal/applicant-privacy-policy",
  },
];

export default function Footer() {
  const [localeOpen, setLocaleOpen] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function openCookieSettings() {
    console.log("Open cookie settings…");
  }

  return (
    <div className="bg-gradient-to-b from-[#343434] to-[#000000] text-white flex flex-col items-center text-start">
      {/* Links Grid */}
      <div className="w-full max-w-9xl px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8 justify-items-center">
        {/* Follow Us */}
        <div>
          <h3 className="uppercase text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Popular Games */}
        <div>
          <h3 className="uppercase text-lg font-bold mb-4">Popular Games</h3>
          <ul className="space-y-2 text-sm text-[#b3b4ad]">
            {popularGames.map((game) => (
              <li key={game.name}>
                <a
                  href={game.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {game.name}
                  <FiExternalLink className="w-4 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="uppercase text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-[#b3b4ad]">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {link.name}
                  <FiExternalLink className="w-4 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="uppercase text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-[#b3b4ad]">
            {legalLinks.map((item) => (
              <li key={item.name}>
                {item.isButton ? (
                  <button
                    onClick={openCookieSettings}
                    className="hover:underline"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li className="inline-flex items-center justify-center gap-1">
              <a
                href="https://support.activision.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Your Privacy Choices
              </a>
              <FiCheckCircle className="w-4 h-3 text-blue-500" />
            </li>
          </ul>
        </div>
      </div>

      {/* Ratings */}
      <div className="w-full max-w-8xl lg:px-35 mt-8">
        <ul className="flex justify-center lg:justify-start gap-6">
          <li>
            <img
              src="ESRB.png"
              alt="ESRB Rating"
              className="h-12 inline-block"
            />
          </li>
          <li>
            <img
              src="ESRBCert.png"
              alt="ESRB Cert"
              className="h-12  inline-block"
            />
          </li>
        </ul>
      </div>

      {/* Logo & Copy */}
      <div className="w-full max-w-6xl px-6 mt-8 flex flex-col items-center space-y-4 pb-8">
        <img src="logo.png" alt="Activision" className="h-12" />
        <p className="text-sm">&copy; 2025 Activision Publishing, Inc.</p>
      </div>
    </div>
  );
}
