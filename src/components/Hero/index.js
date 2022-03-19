import React from "react";
import HeroTitle from "./HeroTitle";
import HeroSvg from "./HeroSvg";
import AboutSection from "./AboutSection";

export default function HeroComponent() {
  return (
    <div>
      <HeroTitle />
      <HeroSvg />
      <AboutSection />
    </div>
  );
}
