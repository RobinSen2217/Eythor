import React from "react";
import Heading from "./Heading";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gu1gtzg",
        "template_k5ksp3y",
        form.current,
        "SkgLwwqay6wLx83lf"
      )
      .then(
        (result) => {
          setError(false);
          // document.getElementById('contactForm').reset()
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          setTimeout(() => {
            setError(null);
          }, 3000);
        },
        (error) => {
          setError(true);
          setTimeout(() => {
            setError(null);
          }, 3000);
        }
      );
  };
  return (
    <div className="w-full" id="contact">
      <Heading content={"Contact Us"} />
      <div className="flex min-[500px]:flex-nowrap flex-wrap justify-center gap-y-3 w-11/12 sm:w-9/12 mx-auto mt-14 mb-6 gap-x-6">
        <div className="flex flex-col w-full min-[500px]:w-1/2 items-center justify-center">
          <h2 className="md:text-7xl text-5xl text-center font-bold">
            Let's Work Together.
          </h2>
          <h2 className="text-2xl md:text-4xl text-center font-semibold mt-4 text-neutral-600">
            Contact Us Now!
          </h2>
        </div>
        <div className="w-[350px]">
          <form
            ref={form}
            id="contactForm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
            viewport={{ once: true }}
            className="flex flex-col flex-nowrap gap-y-5  m-auto w-full"
          >
            <input
              required
              id="name"
              className=" placeholder:text-gray-500 px-3 py-2 outline-black outline outline-2"
              color="white"
              placeholder="Username"
            ></input>
            <input
              required
              id="email"
              className=" placeholder:text-gray-500 px-3 py-2 outline-black outline outline-2"
              placeholder="Email"
            ></input>
            <textarea
              required
              rows={5}
              id="message"
              className=" outline-black  placeholder:text-gray-500 p-3 outline outline-2"
              placeholder="Message"
            ></textarea>
            <input
              type="button"
              id="btnsubmit"
              value="SEND"
              onClick={sendEmail}
              className="rounded-none bg-blue-600 text-lg text-white font-semibold hover:bg-blue-700 transition-colors duration-300 py-2 hover:cursor-pointer"
            />
            {error === null && <span>&nbsp;</span>}
            {error === false && (
              <span className="text-green-600">Mail Sent</span>
            )}
            {error === true && (
              <span className="text-red-500">Error Occured</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
