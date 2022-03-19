import React from "react";
import HeroTitle from "./HeroTitle";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

export default function HeroComponent() {
  return (
    <div>
      <HeroTitle />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
}
