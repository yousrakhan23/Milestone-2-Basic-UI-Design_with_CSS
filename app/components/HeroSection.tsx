import React from 'react'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
    
    <div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center px-4 py-8 md:py-12 ">

        <div className="text-center md:text-left">

        <h1 className='mt-6 md:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-900 font-extrabold hover:translate-y-5 hover:text-green-800 transition-transform duration-800'>SAFE HOME CHEMICALS .</h1>

        <h2 className='mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-green-900 font-extrabold'> HEXA SHIELD.</h2>
        <p className='mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-900 font-bold lowercase transition ease-in-out duration-300 hover:scale-110 '>one spray, total protection.<br /> Say goodbye to unwanted invaders with<br /><span className='text-blue-900 uppercase'>Hexa Shield</span> <br />the all-in-one solution for a pest-free home !</p>
        </div>

        <div className="mt-8 md:mt-0 md:ml-12 flex justify-center items-center ">
          <Image src={"/p1.jpg"} alt="hero-img" width={500} height={500} className="transition transform duration-600 ease-in hover:scale-125 rounded-lg border-spacing-0.5 bg-blue-900 shadow-lg  object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900 " />

        </div>

      </div>
      </div>
      
      </>

      );
}

      export default HeroSection;