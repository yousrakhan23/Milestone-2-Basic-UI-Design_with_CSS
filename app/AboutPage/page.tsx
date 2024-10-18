import React from "react";




const AboutPage = () => {
  return (
    <>
      <div>
        <h1>HEXA SHIELD PRODUCTS</h1>
        <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg shadow-lg">
        {/* <video src="@/app/assets/videos/video.mp4"></video> */}
        <video width="500" controls>
        <source src="/videos/video1.mp4" type="video/mp4" />
      .
      </video>
        </div>
        <p>This is the about page.</p>
        
      </div>
    </>
  );
}

export default AboutPage;