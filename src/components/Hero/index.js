import React from "react";
import HeroTitle from "./HeroTitle";
import HeroSvg from "./HeroSvg";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

export default function HeroComponent() {
  return (
    <div>
      <HeroTitle />
      <HeroSvg />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
}
