import React from "react";
import { motion } from "framer-motion";

import SoundBarComponent from "../SoundBarComponent";

export default function Socials() {
  return (
    <motion.div
      className="ml-2"
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
