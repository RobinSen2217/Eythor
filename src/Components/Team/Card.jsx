import React from "react";
// import { motion } from "framer-motion";

const Card = ({ card }) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, white 66.66%,rgb(37 99 235) 33.34%",
      }}
      key={card.id}
      className="flex flex-col shadow-md flex-nowrap h-[370px] w-[300px] overflow-hidden border-separate "
    >
      <div className=" group-hover:scale-110 w-full h-2/3 rounded-bl-[20%] overflow-hidden border-separate bg-blue-600 flex justify-center items-center">
        <div className="p-2 rounded-full bg-blue-600 border-white border-4 bg-clip-content">
          <img src={card.url} alt="img" className="rounded-full w-[160px]" />
        </div>
      </div>
      <div className="flex-col flex-nowrap items-center flex border-separate w-full h-1/3  bg-white rounded-tr-[40%] overflow-hidden ">
        <h1 className="text-black text-xl font-bold  text-center px- mt-4 font-serif">
          {card.name}
        </h1>
        <p className=" font-medium text-lg text-gray-500 font-serif">
          {card.desig}
        </p>
        <button
          onClick={() => {
            window.open(card.LinkedIn, "_blank");
          }}
          className="bg-gray-300 hover:bg-[#4085f5] hover:text-white transition-colors duration-300 px-2 text-lg rounded-sm mt-3 font-serif "
        >
          LinkedIn  <i class="fa-brands fa-linkedin"></i>
        </button>
      </div>
    </div>
  );
};
export default Card;
