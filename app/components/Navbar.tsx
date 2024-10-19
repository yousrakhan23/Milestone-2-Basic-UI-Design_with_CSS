import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <nav className='bg-black hover:bg-gradient-to-r from-blue-400 via-green-700 to-blue-700 cursor-pointer flex justify-center items-center rounded-full px-9 mx-2 pt-1 mt-4 mb-9 ' >
        <div className='max-w-[31%] h-auto px-20'><Image src={"/logo-removebg-preview.png"} alt={'logo-image'} width={100} height={20} className='w-20 h-[100%]' /></div>

        <ul className='container mx-auto flex justify-center gap-7 space-x-2 '>
          <li><Link href="/" className="hover:text-blue-900 text-white font-extrabold text-2xl p-9 m-9">Home</Link></li>
          <li><Link href="/ProductPage" className="hover:text-blue-900 text-white font-extrabold text-2xl p-9 m-9">Products</Link></li>
          <li><Link href="/ServicesPage" className="hover:text-blue-900 text-white font-extrabold text-2xl p-9 m-9">Services</Link></li>
          <li><Link href="/ContactPage" className="hover:text-blue-900 text-white font-extrabold text-2xl p-9 m-9">Contact Us</Link></li>
        </ul>
      </nav>
    </>



  );
}

export default Navbar;