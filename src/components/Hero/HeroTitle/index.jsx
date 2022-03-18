import React from "react";

export default function HeroTitle() {
  return (
    <main>
      <div className="flex flex-col justify-center items-start p-5 space-y-10">
        <h1 className="mt-10 text-white text-3xl inline-block">
          Hi, i'm Prabhu. And i'm a Full Stack{" "}
          <span className="text-[#3F37C9] hover:underline">Web Dev.</span>
        </h1>
        <button className="bg-[#3F37C9] text-white cursor-pointer rounded-full px-5 py-0 ">
          Projects
        </button>
      </div>
    </main>
  );
}
