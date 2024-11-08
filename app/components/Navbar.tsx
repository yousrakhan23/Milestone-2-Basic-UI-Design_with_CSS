"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineMenuOpen } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <Image src="/logo-removebg-preview.png" alt="logo-image" width={100} height={20} className="w-20 h-full" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <MdOutlineMenuOpen />
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link href="/" className="nav-link">Home</Link></li>
        <li><Link href="/ProductPage" className="nav-link">Products</Link></li>
        <li><Link href="/ServicesPage" className="nav-link">Services</Link></li>
        <li><Link href="/ContactPage" className="nav-link">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
