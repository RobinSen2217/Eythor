import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import Anchor from "../Anchor";
// import Dropdown from "./Dropdown";

function Navbar() {
  const location = useLocation();
  if (location.pathname === "/") {
    document.body.style.background = "#ffffff";
  }
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [isActive, setActive] = useState(false);

  const handleSidebar = () => {
    setActive(!isActive);
  };
  const [mobile, setMobile] = useState(window.innerWidth <= 460 ? true : false);

  useEffect(() => {
    setMobile(window.innerWidth <= 460 ? true : false);
  }, [window.innerWidth]);
  return (
    <>
      {mobile ? (
        <motion.button
          onClick={handleSidebar}
          className="p-0 fixed top-3 right-5 z-[100] flex items-center justify-center bg-blue-500 h-12 w-12 focus:outline-none hover:cursor-pointer rounded-[50%] gap-y-[5px] flex-col flex-nowrap"
        >
          <motion.div
            variants={{
              active: {
                rotate: "45deg",
                y: 2.5,
              },
              notActive: { rotate: "0deg", y: 0 },
            }}
            animate={isActive ? "active" : "notActive"}
            transition={{
              duration: 0.5,
            }}
            className="bg-white h-[1.5px] m-0 p-0 w-6"
          ></motion.div>

          <motion.div
            variants={{
              active: { rotate: "-45deg", y: -2.5 },
              notActive: { rotate: "0deg", y: 0 },
            }}
            animate={isActive ? "active" : "notActive"}
            transition={{
              duration: 0.5,
            }}
            className="bg-white h-[1.5px] p-0 m-0 w-6"
          ></motion.div>
        </motion.button>
      ) : (
        <motion.header
          variants={{
            visible: {
              y: 0,
            },
            hidden: {
              y: "-100%",
            },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: easeInOut }}
          className={` body-font sticky top-0 shadow-lg bg-white shadow-slate-500/10 z-10 px-7`}
        >
          <div className="container h-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              className={`flex title-font font-medium items-center mb-4 md:mb-0`}
            >
              {/* <i
                className="fa-sharp fa-solid fa-photo-film fa-2xl"
                style={{ color: "#5900ff" }}
              ></i> */}
              <span className="ml-3 text-3xl font-bold">Eythor</span>
            </a>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <div

                className="mr-5 hover:cursor-pointer "
              >
              <Anchor href='/' color={'text-black'} content={'Home'}/>
              </div>
              <Link
                to="/about"
                className="mr-5 hover:cursor-pointer "
              >
                About
              </Link>
              {/* <Link
                to="/team"
                className="mr-5 hover:cursor-pointer hover:text-gray-900"
              >
                Team
              </Link> */}
              <Link
                to="/contact"
                className="mr-5 hover:cursor-pointer hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>

            <div className="bg-transparent">&nbsp;</div>
          </div>
        </motion.header>
      )}


      <AnimatePresence mode="wait">{isActive && <SideNav />}</AnimatePresence>
    </>
  );
}

export default Navbar;
