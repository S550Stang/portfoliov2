import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactFormComponent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pn9hp4l",
        "template_sttqmdh",
        form.current,
        "m4WmIRUgvIlzN9Flo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="mt-10 lg:mt-0">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-1 lg:space-y-5 flex flex-col justify-center items-center lg:ml-10 xl:ml-44 2xl:ml-72 "
        action=""
      >
        <input
          className="rounded-xl sm:w-60 lg:w-96"
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
        />
        <input
          className="rounded-xl sm:w-60 lg:w-96 "
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="rounded-xl sm:w-60 lg:w-96"
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          className="bg-[#3F37C9] text-md sm:text-lg 2xl:text-4xl  text-white cursor-pointer rounded-full px-2 py-1 sm:px-10 2xl:px-14 2xl:py-2 hover:scale-110 transition duration-300 ease-in-out "
          type="submit"
        >
          Send A Message
        </button>
      </form>
    </div>
  );
}
