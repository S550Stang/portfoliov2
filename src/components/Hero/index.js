import React from "react";
import HeroTitle from "./HeroTitle";
import HeroSvg from "./HeroSvg";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";

export default function HeroComponent() {
  return (
    <div>
      <HeroTitle />
      <HeroSvg />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
