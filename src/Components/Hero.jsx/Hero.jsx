import React, { useEffect, useState } from "react";
import BigHero from "./BigHero";
import SmallHero from "./SmallHero";

function Hero() {
  const [change, setChange] = useState(false);
  useEffect(()=>{
    if (window.innerWidth<840){
      setChange(true)
    }else{
      setChange(false)
    }
  },[])
  return <>{change ? <SmallHero /> : <BigHero />}</>;
}

export default Hero;
