import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { ProductContext } from "../context/productContext";
import Payment from "../auth/Payment";
import NavBarMobile from "../layout/NavBarMobile";
import Wapper from "../../Style/ProductCartStyle";
import Header from "../layout/Header";
import { getUserFromLocalStorage, getInformationUser } from "../localStorage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
const ProductCart = () => {
  const user = getUserFromLocalStorage();
  const information = getInformationUser();
  const navigate = useNavigate();
  const [combinedData, setCombinedData] = useState([]);
  const {
    cartState: { cart },
    getCart,
    deleteProductCart,
    editProductCart,
  } = useContext(CartContext);

  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);

  const [quantity, setQuantity] = useState([]);
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    getCart();
    getProduct();
  }, []);

  useEffect(() => {
    if (cart[0]?.product && products.length) {
      const updatedProductCart = products.filter((product) =>
        cart[0].product.some((item) => item.productIds === product.id)
      );
      setProductCart(updatedProductCart);
      setQuantity(cart[0]?.product.map((product) => product.amount));
    }
  }, [cart, products]);

  const handleBuyProduct = async () => {
    try {
      if (productCart.length === 0) {
        toast.warning("Please add product!", {
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
          navigate("/");
        }, 2000);
      } else if (
        !information ||
        !information.address ||
        !information.phoneNumber
      ) {
        navigate("/profile");
        toast.warning("Please add information !!!", {
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
          navigate("/profile");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (e, productId, index) => {
    const newQuantity = parseInt(e.target.value);
    const newQuantities = [...quantity];
    newQuantities[index] = newQuantity;
    setQuantity(newQuantities);
    editProductCart(user.uid, productId, newQuantity);
  };

  const removeProductCart = async (productId) => {
    try {
      await deleteProductCart(user.uid, productId);
    } catch (error) {
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
  };

  useEffect(() => {
    // Tạo một mảng mới chứa thông tin từ cả productCart và quantity
    const newCombinedData = productCart.map((product, index) => ({
      ...product,
      amount: quantity[index] || 0,
    }));
    setCombinedData(newCombinedData);
  }, [productCart, quantity]);
  return (
    <>
      <Header />
      <ToastContainer />
      <Wapper>
        <div className="small-container cart-page">
          {productCart.length === 0 && (
            <p style={{ textAlign: "center" }}>Nothing here</p>
          )}
          {productCart.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
                {productCart.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div className="cart-info">
                        <img
                          src={product.productImage}
                          width="200px"
                          height="200px"
                          alt={product.productName}
                        />
                        <div>
                          <p style={{ fontSize: "13px", marginTop: "10px" }}>
                            {product.productName}
                          </p>
                          <small>Price: ${product.salePrice}</small>
                          <br />
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={(e) => removeProductCart(product.id)}
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input
                        style={{ fontSize: "13px", width: "50px" }}
                        type="number"
                        value={quantity[index] || ""}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(e, product.id, index)
                        }
                      />
                    </td>
                    <td>${product?.salePrice * (quantity[index] || 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {productCart.length > 0 && (
            <div className="total-price">
              <table>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>
                      $
                      {productCart.reduce((total, product, index) => {
                        return (
                          total +
                          parseFloat(
                            product?.salePrice * (quantity[index] || 0)
                          )
                        );
                      }, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>$30</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      $
                      {productCart.reduce((total, product, index) => {
                        return (
                          total +
                          parseFloat(product.salePrice * (quantity[index] || 0))
                        );
                      }, 0) + 30}
                    </td>
                  </tr>
                  {!information ? (
                    <div
                      onClick={handleBuyProduct}
                      style={{ background: "red", cursor: "pointer" }}
                    >
                      payment
                    </div>
                  ) : (
                    <div onClick={handleBuyProduct}>
                      <Payment
                        total={
                          productCart.reduce((total, product, index) => {
                            return (
                              total +
                              parseFloat(
                                product.salePrice * (quantity[index] || 0)
                              )
                            );
                          }, 0) + 30
                        }
                        productCart={combinedData}
                      />
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Wapper>
      <NavBarMobile />
    </>
  );
};

export default ProductCart;
