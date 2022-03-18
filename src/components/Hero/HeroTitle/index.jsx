import React from "react";

export default function HeroTitle() {
  return (
    <main>
      <div className="flex flex-col justify-center items-start p-5 space-y-10">
        <h1 className="mt-10 text-white font-bold text-4xl inline-block">
          Hi, i'm Prabhu. I am a Full Stack <br />
          <span className="text-[#3F37C9] hover:underline">Web Dev.</span>
        </h1>
        <button className="bg-[#3F37C9] text-xl text-white cursor-pointer rounded-full px-5 py-0 ">
          Projects
        </button>
      </div>
    </main>
  );
}
