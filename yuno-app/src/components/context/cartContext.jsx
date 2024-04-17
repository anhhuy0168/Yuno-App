import { createContext, useReducer, useState } from "react";
import "../../firebase-config";
import { db } from "../../firebase-config";
import { cartReducer } from "../reducers/cartReducer";
import {
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  CART_LOADED_FAIL,
  CART_LOADED_SUCCESS,
  ADDPRODUCTTOCART,
} from "./constants";
import { getUserFromLocalStorage } from "../localStorage";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const cartCollectionRef = collection(db, "cart");
  // State
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    cartLoading: true,
    listProductCart: [],
  });
  const user = getUserFromLocalStorage();
  const getCart = async () => {
    try {
      const response = await getDocs(cartCollectionRef);
      const filteredCarts = response.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((cart) => cart.userId === user.uid);
      if (filteredCarts.length > 0) {
        dispatch({ type: CART_LOADED_SUCCESS, payload: filteredCarts });
      }
    } catch (error) {
      dispatch({ type: CART_LOADED_FAIL });
    }
  };
  const deleteProductCart = async (userId, productId) => {
    try {
      // Tìm và cập nhật giỏ hàng của người dùng
      const response = await getDocs(cartCollectionRef);
      const filteredCarts = response.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((cart) => cart.userId === userId);
      for (const cart of filteredCarts) {
        // Lọc các sản phẩm trong giỏ hàng có productIds trùng khớp với productId
        const updatedProducts = cart.product.filter(
          (product) => product.productIds !== productId
        );
        // Cập nhật giỏ hàng với danh sách sản phẩm đã lọc
        const cartDoc = doc(db, "cart", cart.id);
        await updateDoc(cartDoc, { product: updatedProducts });
        getCart()
      }
      alert("Đã xóa sản phẩm khỏi giỏ hàng thành công!");
    } catch (error) {
      alert("Đã xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng!");
    }
  };
  const editProductCart = async (userId, newProductIds, amount) => {
    try {
      const response = await getDocs(cartCollectionRef);
      const filteredCarts = response.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((cart) => cart.userId === userId);
      if (filteredCarts.length > 0) {
        const cartDoc = doc(db, "cart", filteredCarts[0]?.id);
        const updatedProducts = filteredCarts[0].product.map((product) => {
          if (newProductIds.includes(product.productIds)) {
            return { ...product, amount: amount };
          }
          return product;
        });
        await updateDoc(cartDoc, { product: updatedProducts });
      } else {
        alert("Không tìm thấy giỏ hàng cho người dùng này");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addProductToCart = async (userId, newProductIds, amount) => {
    try {
      const response = await getDocs(cartCollectionRef);
      const filteredCarts = response.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((cart) => cart.userId === userId);
      if (filteredCarts.length > 0) {
        const cartDoc = doc(db, "cart", filteredCarts[0]?.id);
        const existingProductIds = filteredCarts[0]?.product.map(
          (product) => product.productIds
        );
        const newProductIdsArray = newProductIds.split(",");
        const isDuplicate = newProductIdsArray.some((productId) =>
          existingProductIds.includes(productId)
        );
        if (isDuplicate) {
          alert("Sản phẩm đã tồn tại trong giỏ hàng");
        } else {
          const newProduct = { productIds: newProductIds, amount: amount };
          await updateDoc(cartDoc, {
            product: [...filteredCarts[0].product, newProduct],
          });
          alert("Thêm sản phẩm vào giỏ hàng thành công");
        }
      } else {
        const newFields = {
          userId: userId,
          product: [{ productIds: newProductIds, amount: amount }],
        };
        await addDoc(cartCollectionRef, newFields);
        alert("Thêm sản phẩm vào giỏ hàng thành công!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cartContextData = {
    cartState,
    getCart,
    addProductToCart,
    deleteProductCart,
    editProductCart,
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
