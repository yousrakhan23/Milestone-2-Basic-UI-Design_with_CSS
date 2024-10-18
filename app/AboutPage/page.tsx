import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AboutPage = () => {
  return (
    <>
    <Navbar />
    
      <div>
        <h1 className="text-3xl font-bold text-blue-900 text-center p-3 ">HEXA SHIELD PRODUCTS</h1>
        <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg shadow-lg">
       
        <video width="500" controls>
        <source src="/videos/video1.mp4" type="video/mp4" />
      .
      </video>
        </div>
        <p>This is the about page.</p>
        
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;