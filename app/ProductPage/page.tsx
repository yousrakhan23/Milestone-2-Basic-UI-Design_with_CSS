"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { products } from '../data/productData';
import { useDataContext } from "../Context/context";
import Link from "next/link";
import './ProductPage.css'; // Import custom CSS

const ProductPage = () => {
  const router = useRouter();
  const { setData } = useDataContext();

  const handleVideoClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <h1 className="product-page-title">HEXA SHIELD PRODUCTS</h1>

      <div className="product-grid">
        {products.map((item) => (
          <Link
            key={item.id}
            href={"/ProductPage/productDescription"}
            onClick={() => setData(products[item.id])}
            className="product-item-link"
          >
            <video
              onClick={() => handleVideoClick(item.id)}
              className="product-video"
              controls
              autoPlay
              loop
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
