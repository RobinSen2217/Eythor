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


function App() {

  const dataList=[
    {
      title:'Intelligent control',
      desc:'Web app control by mobile, automatic cleaning time and cleaning mode can be set',
  img:'https://pixlr.com/images/index/ai-image-generator-two.webp'
    },{
      title:'Solar power system',
      desc:'Self-charging-comes with a solar power system, convenient and efficient, can last 8-10 hours',
  img:'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },{
      title:'Internet of things technology application',
      desc:'Independent control, grouping, automatic cleaning',
  img:'https://burst.shopifycdn.com/photos/cave-of-wonder-and-lights.jpg?width=1000&format=pjpg&exif=0&iptc=0'
    },{
      title:'Strong adaptability',
      desc:'Applicable to various arrangement arrays and various power stations',
  img:'https://burst.shopifycdn.com/photos/cave-of-wonder-and-lights.jpg?width=1000&format=pjpg&exif=0&iptc=0'
    },{
      title:'1 min disassembly and assembly of brushes',
      desc:'Applicable to various arrangement arrays and various power stations',
  img:'https://burst.shopifycdn.com/photos/cave-of-wonder-and-lights.jpg?width=1000&format=pjpg&exif=0&iptc=0'
    },{
      title:'Adjusting the brush up and down',
      desc:'When the brush wears out, the cleaning ability decreases. You can adjust the brush downward to increase the cleaning ability and double the service life of the brush',
  img:'https://burst.shopifycdn.com/photos/cave-of-wonder-and-lights.jpg?width=1000&format=pjpg&exif=0&iptc=0'
    },

  ]

  return (
    <Router>
      {/* <Navbar /> */}
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
