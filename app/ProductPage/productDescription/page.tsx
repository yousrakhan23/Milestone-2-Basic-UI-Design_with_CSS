"use client";

import { useDataContext } from "@/app/Context/context";

const ProductPage = () => {

     const {data}=useDataContext()
     console.log(data)
    // const router = useRouter();
    // const {id} = router.query;
    // const product = products.find((item) => item.id === parseInt(id as string));
    // if (!product) return <p>Product not found!</p>;
    return (
        <>
        <div>{data.name}</div>
        <div className="w-full max-w-xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
            <video 
            src={data.video}
            controls
            autoPlay
            loop 
            className="w-full h-auto rounded-lg mb-5" 
            />
            <p className="text-lg mb-3">Price: ${data.price}</p>
            <p className="text-lg mb-3">Price: ${data.description}</p>
        </div>
        </>
    );
}
export default ProductPage;

