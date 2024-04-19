import React from 'react'
import {
  FaShoppingBag,
  FaHome,
  FaRegUserCircle,
} from "react-icons/fa";
import { getCartTotalQuantity ,getUserFromLocalStorage} from '../localStorage';
import  { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/cartContext';
import { ProductContext } from '../context/productContext';
const NavBarMobile = () => {
  const cartTotalQuantity = getCartTotalQuantity();
  const user = getUserFromLocalStorage()
  const [productCart, setProductCart] = useState([]);
  const {
    cartState: { cart },
    getCart,
  } = useContext(CartContext);
  
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  useEffect(() => {
    if (cart[0]?.product && products.length) {
      const updatedProductCart = products.filter((product) =>
        cart[0].product.some((item) => item.productIds === product.id)
      );
      setProductCart(updatedProductCart);
    }
  }, [cart, products]);
  return (
    <div className="mobile-bottom-navigation">
    <button className="action-btn">
      <Link to={"/productCart"}>
        <FaShoppingBag
          name="bag-handle-outline"
          style={{ color: "white" }}
        />
        <span className="count">{productCart.length}</span>
      </Link>
    </button>
    <button className="action-btn">
      <Link to={"/"}>
        <FaHome name="home-outline" style={{ color: "white" }} />
      </Link>
    </button>
    <button className="action-btn" data-mobile-menu-open-btn="">
    <Link to={"/account"}>
                    {user ? (
                      <Link to={"/profile"}>
                         <FaRegUserCircle
                        name="person-outline"
                        style={{ color: "white" }}
                      />
                      </Link>
                    ) : (
                      <FaRegUserCircle
                        name="person-outline"
                        style={{ color: "white" }}
                      />
                    )}
                  </Link>
    </button>
  </div>
  )
}

export default NavBarMobile