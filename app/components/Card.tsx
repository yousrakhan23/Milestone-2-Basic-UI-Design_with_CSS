import React from 'react';
import Image from 'next/image';
import card1 from '../../public/bikiya.png';
import bg_img from '../../public/service-bg.png';
import card2 from '../../public/online_payment.png';
import './Card.css'; // Import custom CSS

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-background">
        <Image
          src={bg_img}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="card-content">
        <div className="card">
          <div className="card-image-container">
            <Image
              src={card1}
              alt="Card1"
              width={200}
              height={200}
              className="card-image"
            />
          </div>
          <h2 className="card-title">
            WE DELIVER ALL OVER PAKISTAN
          </h2>
        </div>

        <div className="card">
          <div className="card-image-container">
            <Image
              src={card2}
              alt="Card2"
              width={200}
              height={200}
              className="card-image"
            />
          </div>
          <h2 className="card-title">
            ONLINE PAYMENT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
