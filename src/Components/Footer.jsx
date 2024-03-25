import React from "react";
import Anchor from "./Anchor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // delay:1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="w-full bg-neutral-900 mt-10 ">
      <div className="bg-neutral-800 w-full py-5">
        <div className="flex flex-wrap gap-y-10 lg:grid lg:grid-cols-4 justify-evenly px-2 sm:px-14 gap-x-2 py-5">
          <div className="flex flex-col gap-y-3 flex-nowrap  ">
            <h1 className="max-[389px]:mx-auto  text-white font-bold text-4xl font-mono">Eythor</h1>

            <motion.div
              className="max-[389px]:mx-auto flex flex-wrap mt-2 [@media(max-width:345px)]:gap-x-5 gap-x-6 gap-y-6"
              variants={variants}
            >
              {/* <Link target="_blank" to="https://github.com/Inquisitor820">
              <motion.i
              whileHover={{ scale: 2 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="fa-brands fa-square-github text-white fa-2xl"
              ></motion.i>
            </Link> */}
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=100093481406011"
              >
                <motion.i
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="fa-brands fa-square-facebook text-white fa-2xl"
                ></motion.i>
              </Link>
              <Link target="_blank" to="https://www.instagram.com/aiz.3d/">
                <motion.i
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="fa-brands fa-square-instagram text-white fa-2xl"
                ></motion.i>
              </Link>
              <Link target="_blank" to="https://twitter.com/aizventurer">
                <motion.i
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className=" fa-brands fa-square-x-twitter text-white fa-2xl"
                ></motion.i>
              </Link>
              {/* <Link target="_blank" to="https://www.behance.net/shadowz123">
              <motion.i
              whileHover={{ scale: 2 }}
              transition={{ type: "spring", duration: 0.4 }}
              className=" fa-brands fa-square-behance text-white fa-2xl"
              ></motion.i>
            </Link> */}
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/ahzam-irshad-92ba671b8/"
              >
                <motion.i
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className=" fa-brands fa-linkedin text-white fa-2xl"
                ></motion.i>
              </Link>
            </motion.div>
            <p className="text-white mt-3">
              <span className="max-[389px]:mx-auto text-slate-300 font-semibold">Email:</span>{" "}
              business.eythor@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-y-3 flex-nowrap">
            <h1 className="text-slate-300 text-xl font-semibold">
              Useful Links
            </h1>
            <Anchor
              content={"Features"}
              color={"text-white"}
              href={"#features"}
            />
            <Anchor content={"About Us"} color={"text-white"} href={"#about"} />
            <Anchor content={"Team"} color={"text-white"} href={"#team"} />
          </div>

          <div className="flex flex-col gap-y-3 flex-nowrap">
            <h1 className="text-slate-300 text-xl font-semibold">Legal</h1>
            <Anchor
              content={"Terms & Conditions"}
              color={"text-white"}
              href={"#"}
            />
            <Anchor
              content={"Privacy Policy"}
              color={"text-white"}
              href={"#"}
            />
          </div>
          <div>
            <img
              src="https://eythor.in/assets/img/favicon.jpg"
              alt="fav"
              className="w-[200px] min-[420px]:w-[250px] rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto flex justify-between gap-x-3 flex-wrap py-4 ">
        <div className="text-white text-center max-[633px]:mx-auto">
          © Copyright <span className="font-semibold text-center">Eythor</span>{" "}
          | All Rights Reserved
        </div>
        <div className="text-md text-white text-center max-[633px]:mx-auto">
          Designed by{" "}
          <span className="text-blue-500 text-center">Robin Sen</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
