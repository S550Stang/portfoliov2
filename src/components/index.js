import React from "react";
import FooterSection from "./Footer";
import HeaderComponent from "./Header";
import HeroComponent from "./Hero";
export default function AllPages() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <FooterSection />
    </div>
  );
}
