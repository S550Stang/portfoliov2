import React from "react";
import { motion } from "framer-motion";
import CV from "../../../assets/Prabhu.DOCX";

export default function HamburgerMenu() {
  return (
    <motion.div
      animate={{
        x: 0,
      }}
      initial={{
        x: 100,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        type: "spring",
      }}
      className="fixed top-0 -right-1 z-50 w-40 h-full flex  justify-center items-center bg-gradient-to-br from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md shadow-xl rounded-xl "
    >
      <ul className="flex flex-col justify-between items-center text-md font-normal text-white  gap-6 mt-44">
        <li>
          <a href="#Home" className="cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="#Projects" className="cursor-pointer ">
            My Work
          </a>
        </li>
        <li>
          <a href={CV} download className="cursor-pointer ">
            Resume
          </a>
        </li>
        <li>
          <a href="#Contact" className="cursor-pointer ">
            Contact Me
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
