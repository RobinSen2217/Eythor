import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function BigHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["0vh", "400vh"]);

  return (
    <>
      <div ref={ref} className="relative overflow-hidden h-[300vh] -z-10">
        <motion.div className="m-0 p-0 flex flex-nowrap h-full w-full">
          <div className="w-1/2 h-full flex flex-col flex-nowrap bg-red-600">
            <div className="bg-black h-[100vh] w-full p-5">
              <h className="text-white font-extrabold font-mono text-6xl">
                Dust Shall Never Shade The Brightness.
              </h>
              {/* <p></p> */}
            </div>
            <div className="bg-pink-400 h-[100vh] w-full bg-[url('https://eythor.in/assets/img/slide/slide-3.jpg')] bg-cover bg-no-repeat bg-center"></div>
            <div className="bg-neutral-800 h-[100vh] flex justify-center items-center w-full p-5">
              <h1 className="text-5xl text-center font-bold text-white">
                The bright shall takeover for the freedom of human thought.
              </h1>
            </div>
          </div>
          <motion.div
            style={{ translateY }}
            className="w-1/2 mt-[-200vh] flex flex-col flex-nowrap h-full bg-violet-700 "
          >
            <div className="h-[100vh] bg-red-500  bg-[url('https://eythor.in/assets/img/slide/slide-2.png')] bg-cover bg-no-repeat bg-center"></div>
            <div className="h-[100vh] flex items-end justify-end bg-blue-600 p-5">
              <h1 className="font-bold text-6xl text-right">
                Providing Smart <br />
                Solar Panel <br />
                Cleaning Robots.
              </h1>
            </div>
            <div className="h-[100vh] bg-green-600 bg-[url('https://eythor.in/assets/img/slide/slide-1.jpg')] bg-cover bg-no-repeat bg-center "></div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default BigHero;
