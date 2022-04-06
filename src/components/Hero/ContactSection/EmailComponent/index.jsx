import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function EmailComponent() {
  return (
    <div className=" flex flex-col justify-center items-center w-60 h-52 mt-10 btn-bg text-[white] bg-[#3F37C9] hover:text-white hover:border border-[#3F37C9] rounded-3xl mx-auto font-Lato ">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <AiOutlineMail className="w-10 h-10" />
        <p className="text-2xl">Email</p>

        <a
          href="mailto:prabhuvardhanrao94@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm underline cursor-pointer "
        >
          Send a message
        </a>
      </div>
    </div>
  );
}
