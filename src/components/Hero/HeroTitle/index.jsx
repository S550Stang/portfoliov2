import React from "react";

export default function HeroTitle() {
  return (
    <main>
      <div className="flex flex-col justify-center items-start p-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 space-y-10">
        <h1 className="mt-10 text-white font-bold text-4xl sm:text-5xl md:text-5xl xl:text-7xl 2xl:text-8xl inline-block">
          Hi, i'm Prabhu.
          <br /> I am a Full Stack
          <br />
          <span className="text-[#3F37C9] hover:underline">Web Dev.</span>
        </h1>
        <button className="bg-[#3F37C9] text-xl sm:text-2xl 2xl:text-4xl  text-white cursor-pointer rounded-full px-5 py-0 hover:scale-110 transition duration-300 ease-in-out ">
          Projects
        </button>
      </div>
    </main>
  );
}
