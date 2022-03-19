import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { TiTick } from "react-icons/ti";

export default function SkillsComponent() {
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
          x: "-900px",
        });
  }, [inView, animation]);
  return (
    <div className="mt-10 2xl:mt-0 mx-auto ">
      {/** SKILLS SIDE TITLE */}
      <motion.div className="relative">
        <motion.h1
          ref={ref}
          animate={animation}
          className="text-[#3F37C9] opacity-20 font-bold text-7xl sm:text-9xl
         md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px] break-all"
        >
          SKILLS
        </motion.h1>
        <div className="relative grid grid-col-1 -top-20 sm:-top-28 md:-top-32 lg:-top-40 xl:-top-44 2xl:-top-52">
          {/** First Grid */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg 2xl:text-xl font-light text-white mt-10">
              Front-End Development
            </p>
            <div className=" w-64 h-64 sm:w-72  2xl:w-[1000px]  rounded-3xl flex justify-center items-center font-Lato  bg-[#3F37C9] border border-white   mt-10 mb-10 lg:space-x-7 xl:space-x-10 2xl:space-x-40  ">
              <div className="  flex flex-col justify-start items-start gap-5  text-white">
                <p className=" flex items-center gap-1 mt-0 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  HTML
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg ">
                  <TiTick className="headerTitle" />
                  JAVASCRIPT
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  TAILWINDCSS
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  BOOTSTRAP
                </p>
              </div>
              <div className="  flex flex-col justify-start items-start gap-5 px-3 text-white">
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  CSS
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  SASS/SCSS
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  REACT
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  BULMA
                </p>
              </div>
            </div>
          </div>
          {/** Second Grid */}
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="text-lg 2xl:text-xl font-light text-white mt-10">
                Back-End Development
              </p>
            </div>
            <div className=" w-64 h-64 sm:w-72 2xl:w-[1000px] rounded-3xl flex justify-center items-center   bg-[#3F37C9] border border-white    mt-10 mb-10 lg:space-x-7 xl:space-x-10 2xl:space-x-40 ">
              <div className="  flex flex-col justify-start items-start gap-5  px-3 text-white">
                <p className=" flex items-center gap-1 mt-0 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  NODEJS
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  EXPRESS
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  RUBY
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  PYTHON
                </p>
              </div>
              <div className="  flex flex-col justify-start items-start gap-5 px-3 text-white">
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  POSTGRESQL
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  MYSQL
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  MONGOdb
                </p>
                <p className=" flex items-center gap-1 font-light text-sm 2xl:text-lg">
                  <TiTick className="headerTitle" />
                  REST-API'S
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
