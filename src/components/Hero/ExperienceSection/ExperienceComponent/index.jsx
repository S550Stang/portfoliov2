import React from "react";
import { motion } from "framer-motion";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function ExperienceComponent() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="text-[#3F37C9] opacity-20 font-bold text-7xl sm:text-9xl
         md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px] break-all"
      >
        EXPERIENCE
      </motion.h1>
      {/** This Will Be Flex Container */}
      <div className="relative left-0 right-0 -top-20 sm:-top-44 md:-top-60 lg:-top-60 xl:-top-60 2xl:-top-[600px] lg:flex lg:justify-between lg:px-20 lg:space-x-5 2xl:px-28 ">
        <div className="lg:grid lg:grid-cols-2 gap-10 xl:gap-20 2xl:space-x-54 mx-auto px-2 ">
          {/** All Experience Components Here */}
          {/** Experience Component Here */}
          <div className="flex justify-center items-center font-Lato mb-10 ">
            <div className=" w-52 lg:w-72 xl:w-80 2xl:w-[700px] h-52 2xl:h-[400px] rounded-3xl flex flex-col justify-center items-center bg-gradient-to-r from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-white text-sm 2xl:text-2xl    gap-3 sm:gap-5">
              <AiFillSafetyCertificate className="headerTitle text-white" />
              <p className="text-[#f7f7f7]">Expereince</p>
              <p className="text-[#f7f7f7] font-light">4+ Years</p>
            </div>
          </div>
          {/** Project Component Here */}
          <div className="flex justify-center items-center font-Lato mb-10">
            <div className=" w-52 lg:w-72 xl:w-80 2xl:w-[700px] h-52 2xl:h-[400px] rounded-3xl flex flex-col justify-center items-center bg-gradient-to-l from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-white text-sm 2xl:text-2xl     gap-3 sm:gap-5">
              <AiFillProject className="headerTitle text-white" />
              <p className="text-[#f7f7f7]">Projects</p>
              <p className="text-[#f7f7f7] font-light">10+ Projects</p>
            </div>
          </div>
          {/** Certfications Component Here */}
          <div className="flex justify-center items-center font-Lato  lg:grid lg:col-span-2 ">
            <div
              className=" w-52 lg:w-72 xl:w-80 2xl:w-[700px] h-52 2xl:h-[400px] rounded-3xl flex flex-col justify-center items-center text-sm 2xl:text-2xl
              bg-gradient-to-br from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md   border border-white gap-3 sm:gap-5 "
            >
              <AiOutlineSafetyCertificate className="headerTitle text-white" />
              <p className="text-[#f7f7f7]">Certifications</p>
              <p className="text-[#f7f7f7] font-light">6+ Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
