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
import { ToastContainer, toast, Bounce } from "react-toastify";
import { FaStar } from "react-icons/fa";
const ProductDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const userData = getUserFromLocalStorage();
  const information = getInformationUser();
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
    if (user == null) {
      toast.error("Please Login !!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setTimeout(async () => {
        navigate("/login");
      }, 2000);
    } else {
      const productId = selectedProduct?.id;
      const userId = user.uid;
      await addProductToCart(userId, productId, amount);
    }
  };
  const handleBuyProduct = async () => {
    if (user == null) {
      toast.error("Please Login !!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(async () => {
        navigate("/login");
      }, 2000);
    } else if (
      !information ||
      !information.address ||
      !information.phoneNumber
    ) {
      toast.error("Please add information !!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(async () => {
        navigate("/profile");
      }, 2000);
    } else {
      const userId = user.uid;
      localStorage.setItem(
        "order",
        JSON.stringify({ userId, ...selectedProduct, amount })
      );
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  // Hàm giảm số lượng
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <>
      <Header />
      <Wrapper>
        <ToastContainer />
        <div className="small-container products-details">
          <div className="row">
            <div className="col-2">
              <img
                src={selectedProduct?.productImage}
                width="100%"
                id="ProductImg"
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="col-2">
              <h1>{selectedProduct?.productName}</h1>

              <h4>Price: {selectedProduct?.salePrice}.00$</h4>
              {/* <input
                type="number"
                min="1"
                value={amount === undefined ? '' : amount} // Sử dụng undefined thay vì null
                onChange={handleChange}
              /> */}
              <div style={{display:"flex"}}>
              <button
                onClick={decreaseAmount}
                style={{
                  padding: "5px 10px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: "deeppink", // Màu đỏ cho nút giảm
                  color: "#fff", // Màu chữ trắng
                  marginRight: "10px",
                }}
              >
                -
              </button>
              <span style={{marginTop:"5px"}}>
                {amount}
              </span>
              <button
                onClick={increaseAmount}
                style={{
                  padding: "5px 10px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: "deeppink", // Màu xanh cho nút tăng
                  color: "#fff", // Màu chữ trắng
                  marginLeft: "10px",
                }}
              >
                +
              </button>
              </div>
           
              <a
                href="#"
                className="btn"
                onClick={handleAddToCart}
                style={{ marginRight: "10px" }}
              >
                <FaCartPlus />
              </a>
              {userData?.address == null && userData?.phoneNumber == null ? (
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
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  Buy
                </a>
              )}

              <h3>
                Product Details: <i className="fa fa-indent" />
              </h3>
              <p style={{ paddingRight: "50px" }}>
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
