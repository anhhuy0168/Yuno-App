import { createContext, useReducer, useState } from "react";
import '../../firebase-config'; 
import { db } from "../../firebase-config";
import {productReducer} from'../reducers/productReducer'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { PRODUCT_LOADED_FAIL,PRODUCT_LOADED_SUCCESS } from "./constants";
export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
    const productCollectionRef = collection(db, "products");
    // State
    const [productState, dispatch] = useReducer(productReducer, {
      products: [],
      productLoading: true,
      listProduct: [],
    });

    const getProduct = async () => {
      try {
        const response = await getDocs(productCollectionRef);
        const dataProducts =  response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        if (dataProducts.length> 0) {
          dispatch({ type: PRODUCT_LOADED_SUCCESS, payload: dataProducts });
        }
      } catch (error) {
        dispatch({ type: PRODUCT_LOADED_FAIL });
      }
    };
   
  
    const productContextData = {
        productState,
        getProduct
    };
  
  
    return (
      <ProductContext.Provider value={productContextData}>
        {children}
      </ProductContext.Provider>
    );
  };
  export default ProductContextProvider;