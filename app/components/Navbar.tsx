"use client"
import React, { useState }  from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  }
  
  return (
    <>
    
      <nav className='bg-black hover:bg-gradient-to-r from-blue-400 via-green-700 to-blue-700 cursor-pointer flex justify-between items-center rounded-full px-9 mx-2 pt-1 mt-4 mb-9 ' >

        <div className='max-w-[31%] h-auto px-20 flex items-center'>
          <Image src={"/logo-removebg-preview.png"} alt={'logo-image'} width={100} height={20} className='w-20 h-[100%]' />
        </div>

         <div className='md:hidden' onClick={toggleMenu}>
         <MdOutlineMenuOpen className='text-white text-4xl cursor-pointer' />
         </div>
        <ul className={`flex-col md:flex-row flex gap-2 md:text-2xl md:gap-7 items-center 
          md:flex md:space-x-8 absolute md:relative top-0 left-0 w-full md:w-auto 
          bg-black md:bg-transparent transition-all duration-300 ease-in-out 
          ${isOpen ? 'top-14 left-0' : 'top-[-100%] left-0'} md:block`}>
          <li><Link href="/" className="hover:text-blue-900 text-white font-extrabold   text-2xl p-9 m-9">Home</Link></li>
          <li><Link href="/ProductPage" className="hover:text-blue-900 text-white font-extrabold text-2xl p-9 m-9">Products</Link></li>
          <li><Link href="/ServicesPage" className="hover:text-blue-900 text-white font-extrabold text-2xl p-9 m-9">Services</Link></li>
          <li><Link href="/ContactPage" className="hover:text-blue-900 text-white font-extrabold text-2xl p-9 m-9">Contact Us</Link></li>
        </ul>
        
        
      </nav>
    </>



  );
}

export default Navbar;
