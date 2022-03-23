import React from "react";
import {
  DiJavascript1,
  DiCss3Full,
  DiHtml5,
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { SiTailwindcss, SiExpress } from "react-icons/si";

export default function ProjectsPage2() {
  return (
    <div className="sm:-mt-10 md:-mt-32 2xl:-mt-96">
      <h1
        className="text-[#3F37C9] opacity-20 font-bold text-7xl sm:text-9xl
     md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px] break-all"
      >
        PROJECTS
      </h1>
      <div className="relative -top-10 md:-top-44 sm:-top-20 2xl:-top-96  grid grid-cols-1 gap-y-4 sm:gap-y-8   text-white 2xl:px-20 ">
        {/** Front - End Grid #1 */}
        <div className="mx-auto  border border-[#3F37C9] rounded-3xl w-52 md:w-96 lg:w-4/5 xl:w-5/6 2xl:w-5/6 h-52 2xl:h-[400px] px-3 lg:px-0 flex overflow-hidden  font-normal">
          <div className="flex flex-col text-left justify-center items-start gap-y-3 2xl:gap-y-6 lg:px-5">
            <p className="inline-block break-words xl:text-xl 2xl:text-2xl ">
              TWEETER
            </p>
            <p className="inline-block break-words text-sm xl:text-lg 2xl:text-xl font-thin   ">
              A Twitter Like clone built with js, html, css, bootstrap, express,
              nodejs, ejs
            </p>
            <button className="bg-[#3F37C9] text-xs sm:text-sm xl:text-lg 2xl:text-xl  text-white cursor-pointer rounded-full px-5 py-1 hover:scale-110 transition duration-300 ease-in-out flex items-center  ">
              Github <FiGithub className="ml-2" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-end p-1 ">
            <DiCss3Full className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            <DiBootstrap className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            <DiHtml5 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            <SiExpress className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            <DiJavascript1 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
          </div>
          <div className="hidden lg:inline-flex w-2/3 xl:w-96 2xl:w-[800px] h-full bg-[#3F37C9] opacity-20"></div>
        </div>
        {/** Back - End Grid #2 */}
        <div className="mx-auto  border border-[#3F37C9] rounded-3xl w-52 md:w-96 lg:w-4/5 xl:w-5/6 2xl:w-5/6 h-52 2xl:h-[400px] px-3 lg:px-0 flex lg:flex-row-reverse  overflow-hidden  font-normal">
          <div className="flex">
            <div className="flex flex-col  text-left justify-center items-start gap-y-3 2xl:gap-y-6 lg:px-5">
              <p className="inline-block break-words xl:text-xl 2xl:text-2xl ">
                PASSWORDKEEPR
              </p>
              <p className="inline-block break-words text-sm xl:text-lg 2xl:text-xl font-thin   ">
                A Full-Stack password keeping app with added features like
                bcrypt.
              </p>
              <button className="bg-[#3F37C9] text-xs sm:text-sm 2xl:text-xl  text-white cursor-pointer rounded-full px-5 py-1 hover:scale-110 transition duration-300 ease-in-out flex items-center  ">
                Github <FiGithub className="ml-2" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-end p-1 2xl:p-2 ">
              <DiCss3Full className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <SiExpress className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <DiHtml5 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <DiJavascript1 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-2/3 xl:w-96 2xl:w-[800px] h-full bg-[#3F37C9] opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
