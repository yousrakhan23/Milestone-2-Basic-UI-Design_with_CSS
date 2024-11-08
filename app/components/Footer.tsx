import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-container">
        <Image 
          src="/logo-removebg-preview.png" 
          alt="Footer Logo" 
          width={200} 
          height={200} 
          className="footer-logo" 
        />
      </div>

      <ul className="footer-links">
        {["Home", "Contact", "Services"].map((item) => (
          <li key={item}>
            <Link 
              href={`/${item === "Home" ? "" : item + "Page"}`}
              className="footer-link"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="footer-icons">
        <div className="footer-icon">
          <Link href="https://www.facebook.com/profile.php?id=61565214891148&mibextid=ZbWKwL">
            <Image src="/fb-removebg-preview.png" alt="Facebook" width={24} height={24} />
          </Link>
        </div>
        <div className="footer-icon">
          <Link href="https://www.instagram.com/safe_home_chemicals?igsh=Y3M4am9zdXZhdTR2">
            <Image src="/instagram_icon.png" alt="Instagram" width={24} height={24} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p>Created by Yousra Khan - All Rights Reserved. 2024</p>
      </div>
    </div>
  );
};

export default Footer;
