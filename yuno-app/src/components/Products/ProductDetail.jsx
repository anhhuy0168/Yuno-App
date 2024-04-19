import React from "react";
import Wrapper from "../../Style/ProductDetailStyle";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { CartContext } from "../context/cartContext";
import { getUserFromLocalStorage } from "../localStorage";
import NavBarMobile from "../layout/NavBarMobile";
import Header from "../layout/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getInformationUser } from "../localStorage";
import { FaStar } from "react-icons/fa";
const ProductDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const userData = getUserFromLocalStorage();
  const information = getInformationUser()
  //PRODUCT CONTEXT
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  // CART CONTEXT
  const { addProductToCart } = useContext(CartContext);

  //ADD PRODUCT TO CART
  const selectedProduct = products.find((product) => product.id === id);
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setAmount(newValue);
    }
  };
  const handleAddToCart = async () => {
    if(user==null){
      navigate("/account")
      alert("Please Login !!!")
    }
    else{
      const productId = selectedProduct?.id;
      const userId = user.uid;
      await addProductToCart(userId, productId, amount);
    }

  };
  const handleBuyProduct = async () => {
    if(user==null){
      navigate("/account")
      alert("Please Login !!!")
    }
   else if(!information ||!information.address||!information.phoneNumber){
      navigate("/profile")
      alert("Please add information !!!")
    }
    else{
      const userId = user.uid;
      localStorage.setItem("order", JSON.stringify({ userId,  ...selectedProduct , amount }));
      navigate("/order");
    }
  };
  //GET PRODUCT
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    setUser(userFromLocalStorage);
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <div className="small-container products-details">
          <div className="row">
            <div className="col-2">
              <img
                src={selectedProduct?.productImage}
                width="100%"
                id="ProductImg"
                style={{borderRadius: "30px"}}
              />
            </div>
            <div className="col-2">
              <h1>{selectedProduct?.productName}</h1>
              
              <h4>Price: {selectedProduct?.salePrice}.00$</h4>
              <input
                type="number"
                defaultValue={1}
                value={amount}
                onChange={handleChange}
              />
              <a href="#" className="btn" onClick={handleAddToCart} style={{marginRight:"10px"}}>
                <FaCartPlus />
              </a>
              {userData?.address==null&& userData?.phoneNumber==null ? (
                   <a
                   className="btn"
                   onClick={handleBuyProduct}
                   style={{ cursor: "pointer" }}
                 >
                   Buy
                 </a>
              ) : (
                <a
                className="btn"
                onClick={handleBuyProduct}
                style={{ cursor: "pointer",marginLeft:"10px" }}
              >
                Buy
              </a>
              )}

              <h3>
                Product Details: <i className="fa fa-indent" />
              </h3>
              <p style={{paddingRight:"50px"}}>
                Cake can also be a bride to help you solve misunderstandings,
                you can "take advantage of" inherent sweetness to soothe your
                temper, shorten the distance for you to be close to each other,
                understand each other and cherish. respect each other more.
                Sometimes unique funny cream cakes bring great joy for you!
              </p>
            </div>
          </div>
        </div>
        <NavBarMobile />
      </Wrapper>
    </>
  );
};

export default ProductDetail;
