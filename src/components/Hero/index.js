import React from "react";
import HeroTitle from "./HeroTitle";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ProjectsPage2 from "./ProjectsPage2";
import ProjectsPage3 from "./ProjectsPage3";
import Socials from "./Socials";

export default function HeroComponent() {
  return (
    <div>
      <Socials />
      <HeroTitle />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ProjectsPage2 />
      <ProjectsPage3 />
    </div>
  );
}
