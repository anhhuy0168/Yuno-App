import React, { useEffect, useState } from "react";
import { FaShoppingBag, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { getUserFromLocalStorage } from "../localStorage";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase-config";
const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [productCart, setProductCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dataUser = getUserFromLocalStorage()
  const usersCollectionRef = collection(db, "users");

  const {
    cartState: { cart },
    getCart,
  } = useContext(CartContext);
  
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersCollectionRef = collection(db, "users");
        const data = await getDocs(usersCollectionRef);
        const dataProducts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const productIds = dataProducts.filter((user) => user.uid === dataUser?.uid);
        localStorage.setItem("informationUser", JSON.stringify(productIds[0]));
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error gracefully, e.g., show a message to the user
      }
    };
  
    fetchUserData(); 
  }, []); 
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
        <Link to="/" style={{cursor:"pointer",zIndex:"1" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
          <span href="#" className="header-logo">
            <img
              src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1713848213/yuno-high-resolution-logo-transparent_wxv9er.png"
              alt="Anon's logo"
              width={110}
              height={30}
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
