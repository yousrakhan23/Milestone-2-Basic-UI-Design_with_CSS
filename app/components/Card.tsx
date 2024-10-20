import React from 'react';
import Image from 'next/image';
import card1 from '../../public/bikiya.png';
import bg_img from '../../public/service-bg.png';
import card2 from '../../public/online_payment.png';

const Card = () => {
  return (
    <div className="relative h-screen w-full bg-gray-100">
      
      <div className="relative h-1/2 w-full">
        <Image
          src={bg_img}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex space-x-12">
        
        <div className="w-80 h-90 bg-gradient-to-r from-green-900 via-blue-900 to-green-900 rounded-xl shadow-lg shadow-green-950 hover:shadow-xl hover:shadow-blue-950 border-[2px] border-black flex flex-col justify-center items-center p-9">
          <div className="h-[90%] rounded-t-xl justify-center items-center">
            <Image
              src={card1}
              alt="Card1"
              width={200}
              height={200}
              className="h-60 w-72 md:w-[400px] md:h-[250px] object-cover transition transform duration-700 ease-in hover:scale-125 rounded-full"
            />
          </div>
          <h2 className="text-black font-extrabold text-sm mt-4 transition-transform duration-500 hover:translate-x-5 hover:text-green-700 cursor-progress">WE DELIVER ALL OVER PAKISTAN</h2>
        </div>

        
        <div className="w-80 h-90 bg-gradient-to-r from-green-900 via-blue-900 to-green-900 rounded-xl shadow-lg shadow-green-950 hover:shadow-xl hover:shadow-blue-950 border-[2px] border-black flex flex-col justify-center items-center p-9">
          <div className="h-[90%] rounded-t-xl justify-center items-center">
            <Image
              src={card2}
              alt="Card2"
              width={200}
              height={200}
              className="h-64 w-72 md:w-[400px] md:h-[250px] object-cover transition transform duration-700 ease-in hover:scale-125 rounded-full"
            />
          </div>
          <h2 className="text-black font-extrabold text-sm mt-4 transition-transform duration-500 hover:translate-x-5 hover:text-green-700 cursor-progress ">ONLINE PAYMENT</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
