import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function FooterComponent() {
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
    <div className="mt-16 px-2 bg-[#3F37C9] w-screen h-20 flex items-center justify-between text-white font-light  ">
      <div className="text-xs"> © All Copyrights Reserved </div>
      <motion.div
        ref={ref}
        animate={animation}
        className="flex justify-between items-center"
      >
        <a href="https://www.instagram.com/prabhu.vardhan.pilli/">
          <AiOutlineInstagram className=" cursor-pointer text-white   text-xl md:text-2xl" />
        </a>
        <a href="https://github.com/S550Stang">
          <AiOutlineGithub className="cursor-pointer text-white  text-xl md:text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/prabhuvardhanraopilli/">
          <AiOutlineLinkedin className="cursor-pointer text-white  text-xl md:text-2xl" />
        </a>
      </motion.div>
    </div>
  );
}
