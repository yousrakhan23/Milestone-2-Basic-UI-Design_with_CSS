"use client";
import { useDataContext } from "@/app/Context/context";
import './productDescription.css';

const ProductPage = () => {
  const { data } = useDataContext();
  console.log(data);

  return (
    <div className="product-container">
      <div className="product-flex">
        <div className="w-full md:w-1/2">
          <h1 className="product-title">{data.name}</h1>
          <video 
            src={data.video}
            controls
            autoPlay
            loop
            className="product-video"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="product-description">{data.description}</p>
          <button className="product-button">
            <p>Price: ${data.price}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
