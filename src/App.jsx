import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import ScrollTopButton from "./Components/ScrollTopButton";
import Hero from "./Components/Hero.jsx/Hero";
import Carousel from "./Components/Team/Carousel";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Features from "./Components/Features";
import './App.css'
import Contact from "./Components/Contact";
import { useState,useEffect } from "react";

function App() {

  const dataList=[
    {
      title:'Intelligent control',
      desc:'Web app control by mobile, automatic cleaning time and cleaning mode can be set',
  img:'https://media.istockphoto.com/id/1536981558/vector/ai-workstation-3d-illustration.jpg?s=612x612&w=0&k=20&c=DJ3-XlUNAGXdvFtZbJgDVI4TAqd3B0S9jFaJBOsgpyk='
    },{
      title:'Solar power system',
      desc:'Self-charging-comes with a solar power system, convenient and efficient, can last 8-10 hours',
  img:'https://garlanduk.com/wp-content/uploads/2022/01/Solarise_PV_System_Header.jpg'
    },{
      title:'Internet of things technology application',
      desc:'Independent control, grouping, automatic cleaning',
  img:'https://images.prismic.io//intuzwebsite/2cd79a86-fb05-40c6-b966-a8cefb853abb_IoT+development+tools+%26+platforms.png?w=1200&q=75&auto=format,compress&fm=png8'
    },{
      title:'Strong adaptability',
      desc:'Applicable to various arrangement arrays and various power stations',
  img:'https://cdn.chinadialogue.net/content/uploads/2023/01/31173801/The-Garissa-solar-power-plant-in-eastern-Kenya_Alamy_2J40Y69.jpg'
    },{
      title:'1 min disassembly and assembly of brushes',
      desc:'Applicable to various arrangement arrays and various power stations',
  img:'https://5.imimg.com/data5/SELLER/Default/2023/5/305418121/ZE/PD/RA/69141292/double-head-electric-solar-panel-cleaning-brush.jpeg'
    },{
      title:'Adjusting the brush up and down',
      desc:'When the brush wears out, the cleaning ability decreases. You can adjust the brush downward to increase the cleaning ability and double the service life of the brush',
  img:'https://soilar.tech/wp-content/uploads/KWUMPHI.png'
    },

  ]


  const [change, setChange] = useState(false);
  useEffect(()=>{
    if (window.innerWidth<840){
      setChange(true)
    }else{
      setChange(false)
    }
  },[])

  return (
    <Router>
     {change?<></>: <Navbar />}
      <ScrollTopButton />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features list={dataList}/>
              <About/>
              <Carousel/>
              <Contact/>
              <Footer/>
            </>
          }
        />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
