import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import Heading from ".././Heading";

const Carousel = () => {
  return (
    <div id="team" className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh]">
        <Heading content={"our team"} />
        <div className="sticky top-0 flex h-[60vh] items-end pb-2 overflow-hidden">
          <motion.div style={{ x }} className="flex gap-x-7 gap-y-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.name}
//         </p>
//       </div>
//     </div>
//   );
// };

export default Carousel;

const cards = [
  {
    url: "https://eythor.in/assets/img/team/naveen.jpg",
    name: "Naveen",
    desig: "Founder",
    LinkedIn: "",
    id: 1,
  },
  {
    url: "https://eythor.in/assets/img/team/lucky.jpg",
    name: "Lucky Rana",
    desig: "Co Founder",
    LinkedIn: "",
    id: 2,
  },
  {
    url: "https://eythor.in/assets/img/team/abhigyan.jpeg",
    name: "Abhigyan Adarsh",
    desig: "Embedded circuit designer",
    LinkedIn: "",
    id: 3,
  },
  {
    url: "https://eythor.in/assets/img/team/nitish.jpg",
    name: "Nitish Kumar",
    desig: "Software Developer",
    LinkedIn: "",
    id: 4,
  },
  {
    url: "https://eythor.in/assets/img/team/divya.jpg",
    name: "Divya Balchandani",
    desig: "Product Designer in CAD",
    LinkedIn: "",
    id: 5,
  },
  // {
  //   url: "/imgs/abstract/6.jpg",
  //   name: "Title 6",
  //   desig:'',
  //   LinkedIn:'',
  //   id: 6,
  // },
  // {
  //   url: "/imgs/abstract/7.jpg",
  //   name: "Title 7",
  //   desig:'',
  //   LinkedIn:'',
  //   id: 7,
  // },
];
