import React from "react";
import Me from "../../../../assets/Me.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function AboutComponent() {
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
          x: "-100vw",
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
         md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px]"
        >
          ABOUT
        </motion.h1>
        {/** This Will Be Flex Container */}
        <div className="absolute left-0 right-0 top-8 sm:top-12 md:top-16 2xl:top-28 lg:flex lg:justify-between lg:px-20 lg:space-x-5 2xl:px-28 w-screen ">
          <img
            className=" rounded-3xl mx-auto w-44 sm:w-52 md:w-60 lg:w-64 xl:w-80 2xl:w-2/3 lg:object-left-top lg:object-cover hover:scale-110 transition duration-300 ease-in-out"
            src={Me}
            alt="profile"
          />
          <p
            className="inline-block p-10 2xl:px-28 font-thin text-center break-words text-white lg:text-xl
          lg:text-left xl:text-2xl 2xl:text-3xl 2xl:leading-10 "
          >
            Hey there! Thank you for dropping by, here's a little bit about me,
            I have a Bachelors Degree in computer science and a Post Graduate
            Diploma in global business. I am a quick learner, I love to fail
            just so i could raise back up stronger.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
