import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function ExperienceComponent() {
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
    <div className="mt-10">
      {/** About Header */}
      <motion.div className="relative">
        <motion.h1
          ref={ref}
          animate={animation}
          className="text-[#3F37C9] opacity-20 font-bold text-7xl sm:text-9xl
         md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px] break-all"
        >
          EXPERIENCE
        </motion.h1>
        {/** This Will Be Flex Container */}
        <div className="relative left-0 right-0 -top-28 sm:-top-44 md:-top-60 lg:-top-60 xl:-top-60 2xl:-top-96 lg:flex lg:justify-between lg:px-20 lg:space-x-5 2xl:px-28 w-screen  ">
          <div className="lg:grid lg:grid-cols-2 mt-10 gap-10 xl:gap-40 2xl:space-x-54 mx-auto px-2  ">
            {/** All Experience Components Here */}
            {/** Experience Component Here */}
            <div className="flex justify-center items-center font-Lato mb-10 2xl:w-96 ">
              <div className=" w-52 h-44  sm:w-56 sm:h-56 md:w-64 xl:w-80 2xl:w-full 2xl:h-full rounded-3xl flex flex-col justify-center items-center   bg-[#3F37C9] border border-white    gap-3 sm:gap-5">
                <AiFillSafetyCertificate className="headerTitle" />
                <p className="text-[#f7f7f7]">Expereince</p>
                <p className="text-[#f7f7f7] font-light">4+ Years</p>
              </div>
            </div>
            {/** Project Component Here */}
            <div className="flex justify-center items-center font-Lato mb-10">
              <div className=" w-52 h-44  sm:w-56 sm:h-56 md:w-64 xl:w-80 2xl:w-96 rounded-3xl flex flex-col justify-center items-center  bg-[#3F37C9] border border-white     gap-3 sm:gap-5">
                <AiFillProject className="headerTitle" />
                <p className="text-[#f7f7f7]">Projects</p>
                <p className="text-[#f7f7f7] font-light">10+ Projects</p>
              </div>
            </div>
            {/** Certfications Component Here */}
            <div className="flex justify-center items-center font-Lato mb-10 lg:grid lg:col-span-2 ">
              <div className=" w-52 h-44 sm:w-56 sm:h-56 md:w-64 lg:w-96 rounded-3xl flex flex-col justify-center items-center  bg-[#3F37C9] border border-white    gap-3 sm:gap-5 ">
                <AiOutlineSafetyCertificate className="headerTitle" />
                <p className="text-[#f7f7f7]">Certifications</p>
                <p className="text-[#f7f7f7] font-light">6+ Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
