import React from "react";
import HeroSvg from "../HeroSvg";

export default function HeroTitle() {
  return (
    <main id="Home">
      <div className="mt-32 sm:mt-28 md:mt-32 lg:mt-36 xl:mt-40 2xl:mt-52 flex flex-col justify-center items-start p-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 space-y-10">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-5xl xl:text-8xl 2xl:text-8xl inline-block ">
          Hi, i'm Prabhu.
          <br />
          And i'm a Full Stack
          <br />
          <span className="text-[#3F37C9] hover:underline">Web Dev.</span>
        </h1>
        <button className="bg-[#3F37C9] text-md sm:text-lg 2xl:text-4xl  text-white cursor-pointer rounded-full px-2 py-1 sm:px-10 2xl:px-14 2xl:py-2 hover:scale-110 transition duration-300 ease-in-out ">
          <a href="#Projects">Projects</a>
        </button>
      </div>
      <HeroSvg />
    </main>
  );
}
