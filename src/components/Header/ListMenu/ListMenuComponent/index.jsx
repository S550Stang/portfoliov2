import React from "react";

export default function ListMenuComponent() {
  return (
    <div className="hidden sm:inline-flex ">
      <ul className=" flex text-white space-x-4 md:space-x-6 lg:space-x-9 xl:space-x-14 2xl:space-x-32 font-light text-xs xl:text-sm 2xl:text-lg">
        <li>
          <a className="hover:translate-y-12 hover:underline cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a>My Work</a>
        </li>
        <li>
          <a>Resume</a>
        </li>
        <li>
          <a>Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
