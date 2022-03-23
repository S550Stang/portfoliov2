import React from "react";

export default function ListMenuComponent() {
  return (
    <div className="hidden sm:inline-flex ">
      <ul
        className=" flex text-white space-x-4 md:space-x-6 lg:space-x-9 xl:space-x-16 2xl:space-x-24 font-light sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[17px]
      2xl:text-[20px] "
      >
        <li className="hover:scale-110 transition duration-300 ease-in-out hover:underline cursor-pointer">
          <a>Home</a>
        </li>
        <li className="hover:scale-110 transition duration-300 ease-in-out hover:underline cursor-pointer">
          <a>My Work</a>
        </li>
        <li className="hover:scale-110 transition duration-300 ease-in-out hover:underline cursor-pointer">
          <a>Resume</a>
        </li>
        <li className="hover:scale-110 transition duration-300 ease-in-out hover:underline cursor-pointer">
          <a>Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
