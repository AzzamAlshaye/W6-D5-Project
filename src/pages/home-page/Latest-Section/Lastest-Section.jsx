// src/components/LatestSection.jsx
import React, { useState } from "react";
import BlogTile from "./BlogTile";
const tabs = [
  { value: "all", label: "All News" },
  {
    value: "activision",
    icon: "logo.png",
    alt: "Activision",
  },
  {
    value: "call-of-duty",
    icon: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg",
    alt: "Call of Duty",
  },
  {
    value: "tony-hawk",
    icon: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg",
    alt: "Tony Hawk's Pro Skater 3 + 4",
  },
  {
    value: "crash-bandicoot",
    icon: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png",
    alt: "Crash Bandicoot 4 It's About Time",
  },
];

const articles = [
  {
    id: 1,
    categories: ["all"],
    link: "https://www.callofduty.com/blog/2025/05/call-of-duty-black-ops-6-warzone-season-four-stitch-returns",
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    date: "May 20, 2025",
    title: "Stitch Returns in Season 04",
    description:
      "Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving in the Season 04 Battle Pass.",
  },
  {
    id: 2,
    categories: ["all"],
    link: "https://www.callofduty.com/blog/2025/05/call-of-duty-endowment-military-appreciation-month-united-force-got-your-six",
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    date: "May 15, 2025",
    title: "Support C.O.D.E. Military Appreciation Month with USAA",
    description:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event.",
  },
  {
    id: 3,
    categories: ["all", "tony-hawk"],
    link: "https://www.tonyhawkthegame.com/blog/2025/05/tony-hawk-pro-skater-three-four-thps-fest-los-angeles",
    imgUrl:
      "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    date: "May 09, 2025",
    title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    description:
      "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11.",
  },
  {
    id: 4,
    categories: ["all"],
    link: "https://www.callofduty.com/blog/2025/05/call-of-duty-black-ops-6-warzone-ricochet-anti-cheat-season-three-recap",
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    date: "May 07, 2025",
    title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
    description: "#TeamRICOCHET Season 03 Recap and Update.",
  },
  {
    id: 5,
    categories: ["all"],
    link: "https://www.callofduty.com/blog/2025/05/call-of-duty-endowment-military-appreciation-month",
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    date: "May 01, 2025",
    title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
    description:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack, the C.O.D.E. Got Your Six Event, Kane Brown High Road Challenge, and more.",
  },
  {
    id: 6,
    categories: ["all"],
    link: "https://www.callofduty.com/blog/2025/04/call-of-duty-black-ops-6-warzone-zombies-season-three-reloaded-announcement",
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    date: "Apr 29, 2025",
    title: "Black Ops 6 Season 03 Reloaded: All the Details",
    description:
      "Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil, and new updates to Verdansk. Get new Loadout items like the Vendetta Perk and the Ladra SMG and participate in new events and more when the mid-season update launches on May 1!",
  },
  {
    id: 7,
    categories: ["call-of-duty"],
    link: "https://blog.activision.com/activision/2024/activision-releases-call-of-duty-warzone-caldera-data-set",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/ATVI-COD-WZ-CALDERA-TOUT.jpg",
    date: "Jul 30, 2024",
    title:
      "OpenUSD Caldera Data Set is available for download for academic and non-commercial use",
    description: "Access Call of Duty: Warzone Caldera OpenUSD Data Set.",
  },
  {
    id: 8,
    categories: ["activision"],
    link: "https://blog.activision.com/activision/2024/activision-announces-new-studio-elsewhere-entertainment-all-new-franchise-development",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/elsewhere-blog-hero.jpg",
    date: "May 16, 2024",
    title:
      "Activision Announces Elsewhere Entertainment, New Studio Formed to Develop All-New Franchise",
    description: "",
  },
  {
    id: 9,
    categories: ["activision"],
    link: "https://blog.activision.com/activision/2020-12/The-Activision-Holiday-Gift-Guide-Crash-Bandicoot",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/CRASH-HOLIDAYGIFTGUIDE-TOUT.jpg",
    date: "Dec 02, 2020",
    title: "Holiday Gift Guide: Crash Bandicoot",
    description:
      "Searching for the perfect Holiday season gift? Look no further with new Crash Bandicoot™ themed apparel, an art book, collectibles, and more that’s sure to please your Crash-crazy friends and family.",
  },
  {
    id: 10,
    categories: ["activision"],
    link: "https://blog.activision.com/activision/2020-12/The-Activision-Holiday-Gift-Guide-Call-of-Duty",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/COD-HOLIDAYGIFTGUIDE-TOUT.jpg",
    date: "Dec 02, 2020",
    title: "Holiday Gift Guide: Call of Duty",
    description:
      "Get ready to execute the mission with Call of Duty® and Black Ops Cold War themed performance and apparel items this holiday season. So don’t miss out! Here is some awesome merch for you and the Tier One Operators in your life.",
  },
  {
    id: 11,
    categories: ["activision"],
    link: "https://blog.activision.com/activision/2020-12/Activision-Blizzard-Veterans-Day-of-Service-2020",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/AGB-VDOS-2020-TOUT.jpg",
    date: "Dec 01, 2020",
    title: "Activision Blizzard Veterans Day of Service: 2020",
    description:
      "Activision Blizzard continues annual volunteer initiative amidst a global pandemic.",
  },
  {
    id: 12,
    categories: ["activision"],
    link: "https://blog.activision.com/activision/2020-10/Veterans-Day-Finding-Oneself-in-Service-of-Others",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/VDAY-RAMSEY-TOUT.jpg",
    date: "Nov 11, 2020",
    title: "Finding Oneself in Service of Others",
    description:
      "While some arrive at their calling as if by decree, others have to hustle and often persevere to get there. Captain Ramsey Abdulrahim’s journey to finding and securing his true north was anything but a foregone conclusion.",
  },
  {
    id: 13,
    categories: ["tony-hawk"],
    link: "https://www.tonyhawkthegame.com/blog/2025/03/tony-hawk-pro-skater-three-plus-four-launch-map-guide-waterpark",
    imgUrl:
      "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/launch-map-guide-watermark/THPS-WATERPARK-TOUT.jpg",
    date: "Mar 04, 2025",
    title: "THPS 3 + 4 Bird’s Eye View Preview — Waterpark",
    description:
      "For the first time in 10 years, new maps are joining the original THPS 3 + 4 lineup, and Waterpark leads the charge. Read on for a first Bird’s Eye preview!",
  },
  {
    id: 14,
    categories: ["crash-bandicoot"],
    link: "https://blog.activision.com/crash-bandicoot/2023/crash-team-rumble-season-3-spyro-elora-announcement",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/crash-bandicoot/CRASH-TEAM-RUMBLE-S3-TOUT.jpg",
    date: "Dec 07, 2023",
    title:
      "Get all fired up for the winter season with new heroes, maps, and more.",
    description: "",
  },
  {
    id: 15,
    categories: ["crash-bandicoot"],
    link: "https://blog.activision.com/crash-bandicoot/2023/crash-team-rumble-season-2-available-now",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/AGB-CRASH-TR-S02-ANNOUNCEMENT-TOUT.jpg",
    date: "Sep 12, 2023",
    title: "Get a sneak peek at what’s to come in Season 2",
    description: "",
  },
  {
    id: 16,
    categories: ["crash-bandicoot"],
    link: "https://blog.activision.com/crash-bandicoot/2023/crash-team-rumble-free-limited-time-access-trial",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-TEAM-RUMBLE-FREE-TRIAL.jpg",
    date: "Aug 09, 2023",
    title: "Crash Team Rumble is Free for a Limited Time",
    description:
      "The team at Toys for Bob is excited for players everywhere to have a chance to jump into the fun from August 11 – 14!",
  },
  {
    id: 17,
    categories: ["crash-bandicoot"],
    link: "https://blog.activision.com/crash-bandicoot/2023/crash-bandicoot-team-rumble-launch-playstation-xbox-wumpa-fruit",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-LAVA-TOUT.jpg",
    date: "Jun 20, 2023",
    title: "Get N. Sane with Crash Team Rumble — Live Now",
    description:
      "Experience a whole new way to Crash in the all-new 4v4, cross-platform Crash Team Rumble. Jump, slide, smash and bash your way across nine wild arenas with eight unique characters all in pursuit of the delectable Wumpa Fruit.",
  },
  {
    id: 18,
    categories: ["crash-bandicoot"],
    link: "https://blog.activision.com/crash-bandicoot/2023/crash-bandicoot-team-rumble-online-standard-deluxe-editions-battle-pass",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-PRE-ORDER-TEAM-RUMBLE-RETAIL.jpg",
    date: "Mar 30, 2023",
    title:
      "Get Ready for an N. Sane Rumble: Pre-Order Crash Team Rumble Online and at Select Retailers!",
    description:
      "While we eagerly await players to participate in the Closed Beta* on April 20 – 24, we thought we’d share more details on what to expect in the coming weeks.",
  },
  {
    id: 19,
    categories: ["crash-bandicoot"],
    link: "https://blog.activision.com/crash-bandicoot/2022/crash-bandicoot-team-rumble-competitive-multiplayer-coming-soon",
    imgUrl:
      "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-LAVA-TOUT.jpg",
    date: "Dec 09, 2022",
    title: "Crash Team Rumble™ — Coming Soon to Xbox and PlayStation",
    description:
      "Rise as a hero or unleash your inner villain as Crash, Dingodile, and other heroes and villains of the Crash universe head to the arena in the all-new 4v4, cross-platform Crash Team Rumble™, releasing in 2023.",
  },
];

export default function LatestSection() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = articles.filter((article) =>
    activeTab === "all"
      ? article.categories.includes("all")
      : article.categories.includes(activeTab)
  );

  return (
    <section className="bg-gradient-to-b from-[#343434] to-[#000000] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Tabs */}
        <h1 className="text-center text-3xl font-bold mb-5 ">
          Latest News & Articles
        </h1>
        <div className="hidden lg:flex justify-center space-x-8 mb-12 border-t  border-b border-gray-400 gap-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-2xl font-semibold rounded ${
              activeTab === "all"
                ? "bg-gray-700 border-b-8 border-[#0668af] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All News
          </button>
          {tabs.slice(1).map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`p-2 rounded ${
                activeTab === tab.value
                  ? "bg-gray-700 border-b-8 border-[#0668af]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <img src={tab.icon} alt={tab.alt} className="h-8 w-auto" />
            </button>
          ))}
        </div>

        {/* Smallest screens: dropdown */}
        <div className="sm:hidden mb-8 px-4">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded"
          >
            <option value="all">All News</option>
            {tabs.slice(1).map((tab) => (
              <option key={tab.value} value={tab.value}>
                {tab.alt}
              </option>
            ))}
          </select>
        </div>

        {/* sm ↔ lg: icon-buttons */}
        <div className="hidden sm:flex lg:hidden justify-center space-x-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-shrink-0 px-4 py-1 text-sm font-semibold rounded-full ${
              activeTab === "all"
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            All News
          </button>
          {tabs.slice(1).map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-shrink-0 p-2 rounded-full ${
                activeTab === tab.value ? "bg-gray-700" : "bg-gray-800"
              }`}
            >
              <img src={tab.icon} alt={tab.alt} className="h-6 w-auto" />
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <BlogTile key={article.id} article={article} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <a
            href="https://blog.activision.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
