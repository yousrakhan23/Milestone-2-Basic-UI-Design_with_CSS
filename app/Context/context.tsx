"use client";
import React from "react";
import { products } from "../data/productData";
import  {createContext, ReactNode,  useContext,useState, } from "react"

type ContextValue={
    data:any;
    setData:(data:any) => void
}

const Context = createContext<ContextValue | undefined>(undefined)
export function useDataContext (){
    const ContextValue = useContext(Context)
    if (!ContextValue) throw new Error ("Context must be used within a Provider");
    return ContextValue
}
const ContextProvider = ({children}:{children:ReactNode}) =>{

    const [data, setData] = useState(products)
    return (
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
}

export default {ContextProvider,Context}