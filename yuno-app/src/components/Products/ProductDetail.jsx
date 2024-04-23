import React from "react";
import Wrapper from "../../Style/ProductDetailStyle";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { CartContext } from "../context/cartContext";
import { getUserFromLocalStorage } from "../localStorage";
import NavBarMobile from "../layout/NavBarMobile";
import Header from "../layout/Header";
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
  const information = getInformationUser({});
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
    try {
      if (user === null) {
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
    } catch (error) {
      if(error.message==="The product already exists in the shopping cart"){
        toast.error(error.message, {
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
      }
      else if(error.message==="Added product to cart successfully"){
        toast.success(error.message, {
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
      }
      else{
        toast.error(error.message, {
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
      }
      // Xử lý lỗi từ addProductToCart ở đây
     
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
      <ToastContainer />
      <Wrapper>
    
        <div className="small-container products-details">
          <div className="row">
            <div className="col-2">
              <img
                src={selectedProduct?.productImage}
                width="100%"
                id="ProductImg"
                style={{
                  borderRadius: "30px",
                  border: "1px solid deeppink",
                  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>
            <div
              className="col-2"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1>{selectedProduct?.productName}</h1>

              <h4>Price: {selectedProduct?.salePrice}.00$</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={decreaseAmount}
                  style={{
                    padding: "5px 10px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    backgroundColor: "deeppink", // Màu đỏ cho nút giảm
                    color: "#fff", // Màu chữ trắng
                    marginRight: "10px",
                  }}
                >
                  -
                </button>
                <span style={{ marginTop: "5px" }}>{amount}</span>
                <button
                  onClick={increaseAmount}
                  style={{
                    padding: "5px 10px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    backgroundColor: "deeppink", // Màu xanh cho nút tăng
                    color: "#fff", // Màu chữ trắng
                    marginLeft: "10px",
                  }}
                >
                  +
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="#"
                  className="btn"
                  onClick={handleAddToCart}
                  style={{ marginRight: "10px" }}
                >
                  <FaCartPlus />
                </a>
                {userData?.address == null &&
                userData?.phoneNumber == null &&
                userData == null ? (
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
              </div>

              <h3 style={{ textAlign: "center", paddingLeft: "20px" }}>
                Product Details: <i className="fa fa-indent" />
              </h3>
              <p style={{ textAlign: "center", padding: "20px 20px" }}>
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
