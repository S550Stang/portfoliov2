import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WhatsappComponent() {
  return (
    <div className=" flex flex-col justify-center items-center w-60 h-52 mt-10 btn-bg text-[white] bg-[#3F37C9] hover:text-white hover:border border-[#3F37C9] rounded-3xl mx-auto font-Lato ">
      <div className="flex flex-col justify-center items-center  gap-2">
        <AiOutlineWhatsApp className="w-10 h-10" />
        <p className="text-2xl ">WhatsApp </p>
        <p className="text-md ">+1 (647)-510-7299</p>
        <a
          href="https://api.whatsapp.com/send?phone=+16475107299"
          target="_blank"
          rel="noreferrer"
          className="text-sm underline cursor-pointer"
        >
          Send a message
        </a>
      </div>
    </div>
  );
}
