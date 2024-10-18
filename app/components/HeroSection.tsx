import React from 'react'
import Image from 'next/image';
// import hero_section_img from '../assets/p1.jpg'

const HeroSection = () => {
  return (
    <>
    <div className='bg-black'>
      <div className="w-[90vw] h-[120vh] flex flex-wrap md:flex-nowrap justify-center items-center ">

        <div>

        <h1 className='mt-4 p-9 text-7xl text-blue-900 font-extrabold text-opacity-95 transition-transform duration-800 hover:translate-y-5 hover:text-green-800'>SAFE HOME CHEMICALS .</h1>

        <h2 className='mt-4 p-9 text-5xl text-green-900 font-extrabold '> HEXA SHIELD.</h2>
        <p className='mt-0 p-9 text-3xl text-green-900 font-bold lowercase translate-x-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>one spray, total protection.<br /> Say goodbye to unwanted invaders with<br /><span className='text-blue-900 uppercase'>Hexa Shield</span> <br />the all-in-one solution for a pest-free home !</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:w-1/2 mt-10 lg:mt-0 relative ">
          <Image src={"/p1.jpg"} alt="hero-img" width={500} height={500} className="transition-transform duration-600 hover:translate-x-5 hover:-translate-y-5 rounded-full border-spacing-0.5 bg-blue-900 shadow-lg  object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900 " />

        </div>

      </div>
      </div>
      </>

      );
}

      export default HeroSection;