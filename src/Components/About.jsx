import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
function About() {
  const bigAnimations = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const smallAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ViewAnimations = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  return (
    <div id="about">
      <Heading content={"What we Do"} />
      <div className="flex flex-wrap w-11/12 md:w-8/12 justify-center lg:w-10/12 gap-y-5 mx-auto mt-10">
        <div className="w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="mb-4 text-4xl md:text-5xl font-bold"
          >
            {"SMART SOLAR PANEL CLEANING ROBOTS".split("").map((char, i) => {
              return (
                <motion.span variants={bigAnimations} key={i}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3, delay: 0.4 }}
            className="text-lg md:text-2xl font-semibold text-gray-600 px-2"
          >
            {"Eythor is devloping a small smart photovoltaic cleaning robot to serve the photovoltaic energy industry."
              .split(" ")
              .map((ch, i) => {
                return (
                  <motion.span
                    className="inline-block"
                    variants={smallAnimations}
                    key={i}
                  >
                    {ch}&#160;
                  </motion.span>
                );
              })}
          </motion.h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={ViewAnimations}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="bg-blue-600 p-5 rounded-xl text-[13px] sm:text-[17px] text-white  lg:w-1/2"
        >
          As a new type of cleaning energy, solar power generation is developing
          rapidly all over the world. However, because solar power stations are
          usually built on higher terrain, where sunshine is sufficient, but
          there is a lot of wind and sand, and water resources are scarce.
          Therefore, it is easy to accumulate dust and dirt on solar panels, and
          the power generation efficiency can be reduced by 8% - 30% on average.
          The hot spot problem of photovoltaic panels caused by dust also
          greatly reduces the service life of photovoltaic panels.
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={ViewAnimations}
          transition={{ type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black p-5 rounded-xl gap-x-3 gap-y-3 text-[13px] sm:text-[17px] text-white  lg:w-1/2"
        >
          <ul className="list-disc pl-1">
            <li>
              The automatic cleaning method for small smart devices is designed
              according to the basic specifications of photovoltaic panels. It
              is suitable for most photovoltaic panel installations, with strong
              adaptability, high cleaning efficiency, and flexible cleaning
              cycles.
            </li>
            <br />
            <li>
              The manual cleaning method for large-scale equipment has high
              cleaning efficiency and is only suitable for large-scale
              photovoltaic power plants with excellent geographical environment,
              and the cleaning cost is high.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={ViewAnimations}
          transition={{ type: "spring", delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-300 h-fit text-lg sm:text-xl p-5 w-full md:w-1/2 lg:w-1/3 mx-auto rounded-xl"
        >
          Based on this, our company has selected an automatic cleaning method
          for small smart equipment and independently devloping a small smart
          photovoltaic cleaning robot to serve the photovoltaic energy industry.
        </motion.div>
      </div>
    </div>
  );
}

export default About;
