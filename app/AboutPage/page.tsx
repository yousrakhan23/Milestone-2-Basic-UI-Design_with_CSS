import React from "react";
import video1 from '@/app/assets/videos/video1'



const AboutPage = () => {
  return (
    <>
      <div>
        <h1>HEXA SHIELD PRODUCTS</h1>
        <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg shadow-lg">
          <iframe className="w-full h-full" 
          src="/assets/videos/video.mp4"/>
        </div>
        <p>This is the about page.</p>
        
      </div>
    </>
  );
}

export default AboutPage;