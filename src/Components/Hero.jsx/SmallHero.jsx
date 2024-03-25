import React from 'react'
import Anchor from "../Anchor";
function SmallHero() {
  return (
    <div className='relative w-full bg-[url("https://solarcleano.com/files/galleries/F1-safety-glider-camera-3-s.jpg")] bg-cover bg-center bg-no-repeat pb-7'>
      <div className='absolute w-full h-full bg-black z-[2] opacity-75'>
      </div>
    
        <nav className='flex justify-around  min-[445px]:justify-between px-10 flex-nowrap z-[3] pt-4 pb-10'>
          <h1 className='max-[445px]:hidden text-white font-mono font-bold text-3xl z-[3]'>Eythor</h1>
          <div className='z-[3]'>
            <ul className='flex gap-x-10 min-[445px]:gap-x-5 items-center justify-evenly'>

                <Anchor content={'Features'} color={'text-white'} href={'#features'}/>
                <Anchor content={'About'} color={'text-white'} href={'#about'}/>
                <Anchor content={'Team'} color={'text-white'} href={'#team'}/>

            </ul>
          </div>
        </nav>
       
       
        <div className='flex w-full justify-evenly flex-wrap gap-y-5 p-5 '>
          <div className='w-[300px] z-[3]'>
            <h1 className='text-5xl font-bold text-white '>Dust Shall Never Shade The Brightness.</h1>
          </div>
<img src="https://nevonprojects.com/wp-content/uploads/2021/08/solar-panel-cleaner-robot-web-main.jpg" alt="" className='w-[250px] z-[3]  border-solid border-8 border-blue-600'/>
        <img src="https://www.xline-systems.co.uk/wp-content/uploads/2023/11/Solar-Cleaning-Robot-M1.jpg" alt=""  className='w-[300px] z-[3]  border-solid border-8 border-blue-600'/>
        </div>
    </div>
  )
}

export default SmallHero
