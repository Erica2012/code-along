import { createContext, useState,useContext} from "react";


export const ProductContext = createContext ({
    products:[],
    setProducts:(products)=>{},
})

export const ProductContextProvider=({children}) =>{
    const [products, setValue]=useState([]);

    const setProducts =(products)=>setValue(products)
   


    return (
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    );


}

export const useProductContext= ()=>useContext(ProductContext)