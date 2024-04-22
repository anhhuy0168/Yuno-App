import React, { useEffect, useState } from "react";
import { FaShoppingBag, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { getUserFromLocalStorage } from "../localStorage";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [productCart, setProductCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const {
    cartState: { cart },
    getCart,
  } = useContext(CartContext);
  
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);

  useEffect(() => {
    getCart();
    getProduct();
    const userData = getUserFromLocalStorage();
    setUser(userData);
  }, []);
  useEffect(() => {
    if (cart[0]?.product && products.length) {
      const updatedProductCart = products.filter((product) =>
        cart[0].product.some((item) => item.productIds === product.id)
      );
      setProductCart(updatedProductCart);
    }
  }, [cart, products]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const value = {
        searchTerm: searchTerm,
      };
      localStorage.setItem('nameProduct', JSON.stringify(value));
      navigate("/search");
    }
  };

  return (
    <div className="header-main">
      <div className="container">
        <Link to="/" style={{cursor:"pointer",zIndex:"1"}}>
          <span href="#" className="header-logo">
            <img
              src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1712917412/1npjxlfvmb071_wy4r9g.webp"
              alt="Anon's logo"
              width={50}
              height={50}
            />
          </span>
        </Link>
        <div className="header-search-container">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Search product name..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            <FaSearch name="search-outline" />
          </button>
        </div>
        <div className="header-user-actions">
          <button className="action-btn">
            {user ? (
              <Link to={"/profile"}>
                <FaRegUserCircle name="person-outline" style={{ color: "gray" }} />
              </Link>
            ) : (
              <Link to={"/login"} style={{ color: "gray" }}>
                <FaRegUserCircle />
              </Link>
            )}
          </button>
          <button className="action-btn">
            <Link to={user ? "/productCart" : "/login"}>
              <FaShoppingBag name="bag-handle-outline" style={{ color: "gray" }} />
              <span className="count">{productCart.length}</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
