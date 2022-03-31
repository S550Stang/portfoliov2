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
    </motion.div>
  );
}
