import { createContext, useReducer, useState } from "react";
import '../../firebase-config'; 
import { db } from "../../firebase-config";
import {cartReducer} from'../reducers/cartReducer'
import {
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { CART_LOADED_FAIL,CART_LOADED_SUCCESS,ADDPRODUCTTOCART } from "./constants";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const cartCollectionRef = collection(db, "cart");
    // State
    const [cartState, dispatch] = useReducer(cartReducer, {
      cart: [],
      cartLoading: true,
      listProductCart:[]
    });

    const getCart = async () => {
      try {
        const response = await getDocs(cartCollectionRef);
        const dataProducts =  response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        if (dataProducts.length> 0) {
          dispatch({ type: CART_LOADED_SUCCESS, payload: dataProducts });
        }
      } catch (error) {
        dispatch({ type: CART_LOADED_FAIL });
      }
    };
    const addProductToCart = async (userId, productIds) => {
        console.log(userId, productIds);
        try {
   
              const dataProducts = await addDoc(cartCollectionRef, { userId, productIds });
             console.log('Thêm sản phẩm vào giỏ hàng thành công!');
          if (dataProducts.length> 0) {
            dispatch({ type: ADDPRODUCTTOCART, payload: dataProducts });
          }
        } catch (error) {
         console.log(error);
        }
      };
   
  
    const cartContextData = {
        cartState,
        getCart,
        addProductToCart
    };
  
  
    return (
      <CartContext.Provider value={cartContextData}>
        {children}
      </CartContext.Provider>
    );
  };
  export default CartContextProvider;