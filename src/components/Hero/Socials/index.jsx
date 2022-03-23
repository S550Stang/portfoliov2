import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import SoundBarComponent from "../SoundBarComponent";

export default function Socials() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3
      fixed z-50  left-2 bottom-10 2xl:left-5 
      "
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: -100,
        opacity: -5,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
        type: "tween",
        stiffness: 100,
        damping: 20,
      }}
    >
      <SoundBarComponent />
      <a href="https://www.instagram.com/prabhu.vardhan.pilli/">
        <AiOutlineInstagram className="mt-3 cursor-pointer text-white  hover:text-[#3F37C9] text-sm md:text-2xl 2xl:text-4xl" />
      </a>
      <a href="https://github.com/S550Stang">
        <AiOutlineGithub className="cursor-pointer text-white hover:text-[#3F37C9] text-sm md:text-2xl 2xl:text-4xl" />
      </a>
      <a href="https://www.linkedin.com/in/prabhuvardhanraopilli/">
        <AiOutlineLinkedin className="cursor-pointer text-white hover:text-[#3F37C9] text-sm md:text-2xl 2xl:text-4xl" />
      </a>
    </motion.div>
  );
}
