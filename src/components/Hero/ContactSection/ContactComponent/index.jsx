import React from "react";
import ContactFormComponent from "../ContactFormComponent";
import EmailComponent from "../EmailComponent";
import FacebookComponent from "../FacebookComponent";
import WhatsappComponent from "../WhatsappComponent";
import ContactHeaderTitle from "../ContactHeaderTitle";

export default function ContactComponent() {
  return (
    <div className="xl:-mt-96">
      <ContactHeaderTitle />
      <div className="relative -top-10 md:-top-44 sm:-top-20 xl:-top-72 2xl:-top-[600px]   flex flex-col justify-center items-center lg:flex-row">
        <div className="flex flex-col justify-center items-center ">
          <WhatsappComponent />
          <FacebookComponent />
          <EmailComponent />
        </div>
        <ContactFormComponent />
      </div>
    </div>
  );
}
