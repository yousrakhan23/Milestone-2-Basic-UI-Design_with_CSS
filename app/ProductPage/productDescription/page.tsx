"use client";
import { useDataContext } from "@/app/Context/context";

const ProductPage = () => {

     const {data}=useDataContext()
     console.log(data)
    return (
        <>
        
        <div className="w-full max-w-4xl mx-auto p-5">
        <div className="flex flex-col md:flex-row gap-x-8 items-start">
        <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-extrabold justify-center items-center mb-2 p-3 m-1">{data.name}</h1>
            <video 
            src={data.video}
            controls
            autoPlay 
            loop 
            className="w-full h-auto rounded-lg border-spacing-0.5 bg-blue-900 shadow-lg object-cover p-4 mx-auto max-w-xs flex-1 flex justify-end shadow-green-950 bg-gradient-to-r from-green-900 via-blue-900 to-green-900" 
            />
            </div>
            <div className="w-full md:w-1/2 space-y-3 p-2 ">
            <p className="text-lg mb-3 font-semibold text-pretty text-green-500 pe-9 p-11 mt-2 me-9">{data.description}</p>
            <button className="inline-flex text-black bg-gradient-to-r from-blue-400 via-green-700 to-blue-700 border-0 py-2 px-8 focus:outline-none rounded-full text-sm transition-transform duration-300 hover:scale-105 hover:text-white "><p className="text-sm font-semibold text-pretty">Price: ${data.price}</p></button>
        </div>
        </div>
        </div>
        </>
    );
}
export default ProductPage;

