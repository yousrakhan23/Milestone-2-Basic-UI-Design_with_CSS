import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo_image from '../assets/logo-removebg-preview.png'
const Navbar = () => {
  return (
    <>
      <nav className='bg-black hover:bg-white cursor-pointer flex justify-center items-center' >
        <div className='max-w-[31%] h-auto px-20'><Image src={logo_image} alt={'logo-image'} className='w-20 h-[100%]' /></div>

        <ul className='container mx-auto flex justify-end gap-7 space-x-8'>
          <li><Link href="/" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">Contact</Link></li>
          <li><Link href="/service" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">Services</Link></li>


        </ul>
      </nav>
    </>



  );
}

export default Navbar;