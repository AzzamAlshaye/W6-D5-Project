import React from "react";

const games = [
  {
    title: "Call of Duty Black Ops 6",
    rating: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
  },
  {
    title: "Call of Duty®: Warzone",
    rating: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
  },
  {
    title: "Call of Duty Modern Warfare III",
    rating: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
  },
  {
    title: "Crash Team Rumble",
    rating: "Everyone 10+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
  },
  {
    title: "Tony Hawk's™ Pro Skater™ 1 + 2",
    rating: "Teen",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
  },
  {
    title: "Call of Duty®: Mobile",
    rating: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
  },
  {
    title: "Sekiro®: Shadows Die Twice",
    rating: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg",
  },
  {
    title: "Spyro® Reignited Trilogy",
    rating: "Everyone 10+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png",
  },
];

export default function OurGames() {
  return (
    <section id="about-our-games" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2">
          Our Games
        </h2>
        <div className="border-t border-gray-600 mb-12" />

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <div
              key={game.title}
              className="flex flex-col rounded overflow-hidden hover:shadow-xl transition cursor-pointer "
            >
              <div
                className="h-0 pb-[100%] bg-center bg-contain bg-no-repeat transition-transform hover:scale-105"
                style={{ backgroundImage: `url('${game.imgUrl}')` }}
              />
              <div className="p-4 flex flex-col flex-1">
                <span className="font-semibold mb-2">{game.title}</span>
                <span className="text-sm text-gray-400 mt-auto">
                  {game.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
