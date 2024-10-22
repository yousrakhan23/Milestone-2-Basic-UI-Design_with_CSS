"use client";
import React from "react";
import { products } from "../data/productData";
import  {createContext, ReactNode,  useContext,useState, } from "react"

type ContextValue={
    data:{id:number ; name:string ; price:number ; description:string ; video:string};
    setData:(data:{id:number ; name:string ; price:number ; description:string ; video:string}) => void,
    products:any
}

const Context = createContext<ContextValue | undefined>(undefined)
export function useDataContext (){
    const ContextValue = useContext(Context)
    if (!ContextValue) throw new Error ("Context must be used within a Provider");
    return ContextValue
}
 export const ContextProvider: React.FC<{children:ReactNode}> = ({children}) =>{

    const [data, setData] = useState(products[0])
    return (
        <Context.Provider value={{products,data, setData}}>
            {children}
        </Context.Provider>
    )
}

export default {Context}