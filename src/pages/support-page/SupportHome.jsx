import React from "react";
import SlideSupport from "./SlideSupport";
import GameSupport from "./Game-Support";

export default function SupportHome() {
  return (
    <div className="flex flex-col bg-black">
      <SlideSupport />
      <GameSupport />
    </div>
  );
}
