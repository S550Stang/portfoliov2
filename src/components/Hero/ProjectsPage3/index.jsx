import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {
  DiJavascript1,
  DiCss3Full,
  DiHtml5,
  DiReact,
  DiRuby,
} from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { SiRubyonrails } from "react-icons/si";

export default function ProjectsPage3() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    inView
      ? animation.start({
          x: 0,

          transition: {
            ease: "easeOut",
            duration: 1,
            type: "spring",
            bounce: 0.3,
          },
        })
      : animation.start({
          x: -300,
        });
  }, [inView, animation]);
  return (
    <motion.div className="sm:-mt-10 md:-mt-32 2xl:-mt-96">
      <motion.h1
        ref={ref}
        animate={animation}
        className="text-[#3F37C9] opacity-20 font-bold text-7xl sm:text-9xl
     md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px] break-all"
      >
        PROJECTS
      </motion.h1>
      <div className="relative -top-10 md:-top-44 sm:-top-20 xl:-top-72 2xl:-top-[600px]  grid grid-cols-1 gap-y-4 sm:gap-y-8   text-white 2xl:px-20 ">
        {/** Front - End Grid #1 */}
        <div className="mx-auto bg-gradient-to-l from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-[#3F37C9] rounded-3xl w-52 md:w-96 lg:w-4/5 xl:w-5/6 2xl:w-5/6 h-52 2xl:h-[400px] px-3 lg:px-0 flex overflow-hidden  font-normal">
          <div className="flex flex-col text-left justify-center items-start gap-y-3 2xl:gap-y-6 lg:px-5">
            <p className="inline-block break-words xl:text-xl 2xl:text-2xl ">
              INTERVIEW SCHEDULER
            </p>
            <p className="inline-block break-words text-sm xl:text-lg 2xl:text-xl font-thin   ">
              A full-stack app created with React, jsx, express nodejs
            </p>
            <button className="bg-[#3F37C9] text-xs sm:text-sm xl:text-lg 2xl:text-xl  text-white cursor-pointer rounded-full px-5 py-1 hover:scale-110 transition duration-300 ease-in-out flex items-center  ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/S550Stang/Interview-Scheduler-React"
              >
                Github
              </a>{" "}
              <FiGithub className="ml-2" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-end p-1 ">
            <DiHtml5 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            <DiCss3Full className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            <DiReact className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            <DiJavascript1 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
          </div>
          <div className="hidden lg:inline-flex w-2/3 xl:w-96 2xl:w-[800px] h-full bg-[#3F37C9] opacity-20"></div>
        </div>
        {/** Back - End Grid #2 */}
        <div className="mx-auto bg-gradient-to-r from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-[#3F37C9] rounded-3xl w-52 md:w-96 lg:w-4/5 xl:w-5/6 2xl:w-5/6 h-52 2xl:h-[400px] px-3 lg:px-0 flex lg:flex-row-reverse  overflow-hidden  font-normal">
          <div className="flex ">
            <div className="flex flex-col  text-left justify-center items-start gap-y-3 2xl:gap-y-6 lg:px-5">
              <p className="inline-block break-words xl:text-xl 2xl:text-2xl ">
                RUBY - JUNGLE
              </p>
              <p className="inline-block break-words text-sm xl:text-lg 2xl:text-xl font-thin   ">
                A Full-Stack e-commerce app made with Ruby.
              </p>
              <button className="bg-[#3F37C9] text-xs sm:text-sm xl:text-lg 2xl:text-xl  text-white cursor-pointer rounded-full px-5 py-1 hover:scale-110 transition duration-300 ease-in-out flex items-center  ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/S550Stang/RONRAILS"
                >
                  Github
                </a>{" "}
                <FiGithub className="ml-2" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-end p-1 2xl:p-2 ">
              <DiRuby className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <SiRubyonrails className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-2/3 xl:w-96 2xl:w-[800px] h-full bg-[#3F37C9] opacity-20"></div>
        </div>
      </div>
    </motion.div>
  );
}
