import { createContext, useReducer, useState } from "react";
import '../../firebase-config'; // Add this line prevent firebase not loading error
import "./App.css";
import { db } from "../../firebase-config'";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
    // State
    const [productState, dispatch] = useReducer(productReducer, {
      products: [],
      productLoading: true,
      listProduct: [],
    });

    const getProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/admin/getStaff`);
        if (response.data.success) {
          dispatch({ type: PRODUCT_LOADED_SUCCESS, payload: response.data.user });
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