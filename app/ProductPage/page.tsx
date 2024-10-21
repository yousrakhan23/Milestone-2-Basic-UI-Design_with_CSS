"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {products} from '../data/productData';
import { useDataContext } from "../Context/context";
import Link from "next/link";



const ProductPage = () => {

 const router = useRouter();
 const {setData} = useDataContext()



  const handleVideoClick = (id:number) => {
    router.push(`/product/${id}`);
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-extrabold text-blue-900 text-center p-2">
          HEXA SHIELD PRODUCTS
        </h1>
        
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <Link href={"/ProductPage/productDescription"} onClick={()=> setData(products[product.id])}>
            <video 
            
            key={product.id}
            onClick={() => {
              
              handleVideoClick(product.id)
              
            }}
            className="cursor-pointer w-full h-auto rounded-lg transition-transform duration-200 hover:-translate-y-1/4 hover:-translate-z-5 border-spacing-0.5 bg-blue-900 shadow-lg object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900"
            controls
            autoPlay
            loop
            >
              <source src={product.video} type="video/mp4" />
            </video>
            
              </Link>
          ))}
          {/* <video className="w-full h-auto rounded-lg transition-transform duration-200 hover:-translate-y-1/4 hover:-translate-z-5 border-spacing-0.5 bg-blue-900 shadow-lg  object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900 " controls autoPlay loop>
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>

          <video className="w-full h-auto rounded-lg transition-transform duration-200 hover:-translate-y-1/4 hover:-translate-z-5 border-spacing-0.5 bg-blue-900 shadow-lg  object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900" controls autoPlay loop>
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>

          <video className="w-full h-auto rounded-lg transition-transform duration-200 hover:-translate-y-1/4 hover:-translate-z-5 border-spacing-0.5 bg-blue-900 shadow-lg  object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900" controls autoPlay loop>
            <source src="/videos/video3.mp4" type="video/mp4" />
          </video>

          <video className="w-full h-auto rounded-lg transition-transform duration-200 hover:-translate-y-1/4 hover:-translate-z-5 border-spacing-0.5 bg-blue-900 shadow-lg  object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900" controls autoPlay loop>
            <source src="/videos/video4.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </>
  );
};

export default ProductPage;


