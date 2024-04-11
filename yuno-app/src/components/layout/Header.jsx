import React from 'react'
import { useEffect,useState } from 'react';
import {
  FaShoppingBag,
  FaRegUserCircle,
  FaSearch 
} from "react-icons/fa";
import { getUserFromLocalStorage ,getCartTotalQuantity} from '../localStorage';
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import useUserFromLocalStorage from "../../hook/useUserFromLocalStorage";
import { ProductContext } from "../context/productContext";
const Header = () => {
  const [user, setUser] = useState(null);

  const { cartState, getCart } = useContext(CartContext);
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  useEffect(() => {
    getCart();
    getProduct();
  }, []);
  useEffect(() => {
    const userData = getUserFromLocalStorage();
    setUser(userData);
  }, []);
  const filteredCarts = cartState.listProductCart.filter(
    (cart) => cart.userId === user?.uid
  );
  const productIds = filteredCarts.map((cart) => cart.productIds).join(",");
  const productCart = products.filter((product) => product.id === productIds);
  return (
      <div className="header-main">
            <div className="container">
              <Link to={"/"}>
              <span href="#" className="header-logo">
                <img
                  src="../src/assets/images/logo/logo.svg"
                  alt="Anon's logo"
                  width={120}
                  height={36}
                />
              </span>
              </Link>
              <div className="header-search-container">
                <input
                  type="search"
                  name="search"
                  className="search-field"
                  placeholder="Enter your product name..."
                />
                <button className="search-btn">
                  <FaSearch name="search-outline" />
                </button>
              </div>
              <div className="header-user-actions">
                <button className="action-btn">
                  <Link to={"/account"}>
                    {user ? (
                      <Link to={"/profile"}>
                        <span>{user.email}</span>
                      </Link>
                    ) : (
                      <FaRegUserCircle
                        name="person-outline"
                        style={{ color: "red" }}
                      />
                    )}
                  </Link>
                </button>
                <button className="action-btn">
                  <Link to={user ? "/productCart" : "/account"}>
                    <FaShoppingBag
                      name="bag-handle-outline"
                      style={{ color: "red" }}
                    />
                            <span className="count">{productCart.length}</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
  )
}

export default Header