import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
    return (
        <>
            <div className='footer bg-geen-800 text-blue-900 bg-gradient-to-r from-blue-400 via-green-700 to-blue-700 '>
                <div>
                    <Image src={"/logo-removebg-preview.png"} alt='Footer Logo' width={200} height={200} className="py-2 mx-auto " />
                    
                </div>

                <ul className='flex gap-6 mb-4 items-center justify-center font-bold text-blue-900'>
                    <li><Link href="/" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">Home</Link></li>
                    <li><Link href="/ProductPage" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">Products</Link></li>
                    <li><Link href="/ContactPage" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">Contact</Link></li>
                    <li><Link href="/ServicesPage" className="hover:text-blue-900 text-green-950 font-extrabold text-2xl p-5">Services</Link></li>
                </ul>

                <div className="flex gap-4 mb-2 justify-center">
                    <div >
                        <Link href='https://www.facebook.com/profile.php?id=61565214891148&mibextid=ZbWKwL'><Image src={"/fb-removebg-preview.png"} alt='Facebook' width={24} height={24} className='hover:scale-110 transition-transform bg-blue-900 rounded-md' /></Link>
                    </div>
                    <div className="footer-icons-container">
                       <Link href="+92 320 9236102"><Image src={"/whatsapp_icon.png"} alt='WhatsApp' width={24} height={24} className='hover:scale-110 transition-transform bg-blue-900 rounded-md' /></Link> 
                    </div>
                    <div className="footer-icons-container">
                       <Link href="https://www.instagram.com/safe_home_chemicals?igsh=Y3M4am9zdXZhdTR2"><Image src={"/instagram_icon.png"} alt='Instagram' width={24} height={24} className='hover:scale-110 transition-transform bg-blue-900 rounded-md '/></Link>
                    </div>
                </div>

                <div>
                    <hr className="border-blue-900"  />
                    <p className='text-green-950 font-extrabold text-center'>Created by Yousra Khan-All Rights Reserved.2024</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
