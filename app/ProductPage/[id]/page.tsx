"use client";
import { useRouter } from "next/router";
import { products } from "../../data/productData";

const ProductPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const product = products.find((item) => item.id === parseInt(id as string));
    if (!product) return <p>Product not found!</p>;
    return (
        <div className="w-full max-w-xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <video 
            src={product.video}
            controls
            autoPlay
            loop 
            className="w-full h-auto rounded-lg mb-5" 
            />
            <p className="text-lg mb-3">Price: ${product.price}</p>
            <p className="text-lg mb-3">Price: ${product.description}</p>
        </div>
    );
}
export default ProductPage;
