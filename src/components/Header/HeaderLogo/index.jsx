import { React, useState } from "react";
import { motion } from "framer-motion";
import HamburgerMenu from "../HamburgerMenu";
import ListMenu from "../ListMenu";
import Socials from "../../Hero/Socials";

export default function HeaderLogo() {
  const [boolean, setBoolean] = useState(false);
  return (
    <header className="flex justify-between items-center p-5 sm:px-10 sm:py-5 md:px-14 md:py-7 lg:px-20 lg:py-9 xl:px-24 xl:py-12 2xl:px-32 2xl:py-14">
      <div className="hover:scale-110 transition duration-300 ease-in-out hover:underline cursor-pointer">
        <h1 className="flex  items-center justify-center text-xl xl:text-2xl 2xl:text-3xl font-Michroma  text-white">
          PPV <Socials className="ml-10" />
        </h1>
      </div>
      {/* HamBurger Menu*/}
      {boolean ? <HamburgerMenu /> : null}
      <ListMenu />
      <motion.div
        className="cursor-pointer z-50 sm:hidden"
        onClick={() => setBoolean(!boolean)}
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          opacity: -5,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="13"
          viewBox="0 0 30 13"
        >
          <g
            id="Group_21"
            data-name="Group 21"
            transform="translate(-334.5 -14)"
          >
            <line
              id="Line_4"
              data-name="Line 4"
              x2="30"
              transform="translate(334.5 14.5)"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="30"
              transform="translate(334.5 20.5)"
              fill="none"
              stroke="#3F37C9"
              strokeWidth="1"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x2="30"
              transform="translate(334.5 26.5)"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </g>
        </svg>
      </motion.div>
    </header>
  );
}
