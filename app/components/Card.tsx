import React from 'react';
import Image from 'next/image';
import card1 from '../../public/bikiya.png';
import bg_img from '../../public/service-bg.png';
import card2 from '../../public/online_payment.png';

const Card = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-100">
    
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={bg_img}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
        flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-4">
        
        
        <div className="w-72 sm:w-80 lg:w-96 h-auto bg-gradient-to-r from-green-900 via-blue-900 to-green-900 
            rounded-xl shadow-lg shadow-green-950 hover:shadow-xl hover:shadow-blue-950 
            border-2 border-black flex flex-col justify-center items-center p-6 transition-all">
          <div className="flex justify-center items-center h-[80%]">
            <Image
              src={card1}
              alt="Card1"
              width={200}
              height={200}
              className="h-40 w-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover 
                transition-transform duration-700 ease-in-out hover:scale-125 rounded-full"
            />
          </div>
          <h2 className="text-black font-extrabold text-base sm:text-lg lg:text-xl mt-4 
            transition-transform duration-500 hover:translate-x-5 hover:text-green-700 cursor-progress">
            WE DELIVER ALL OVER PAKISTAN
          </h2>
        </div>

        
        <div className="w-72 sm:w-80 lg:w-96 h-auto bg-gradient-to-r from-green-900 via-blue-900 to-green-900 
            rounded-xl shadow-lg shadow-green-950 hover:shadow-xl hover:shadow-blue-950 
            border-2 border-black flex flex-col justify-center items-center p-6 transition-all">
          <div className="flex justify-center items-center h-[80%]">
            <Image
              src={card2}
              alt="Card2"
              width={200}
              height={200}
              className="h-40 w-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover 
                transition-transform duration-700 ease-in-out hover:scale-125 rounded-full"
            />
          </div>
          <h2 className="text-black font-extrabold text-base sm:text-lg lg:text-xl mt-4 
            transition-transform duration-500 hover:translate-x-5 hover:text-green-700 cursor-progress">
            ONLINE PAYMENT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
