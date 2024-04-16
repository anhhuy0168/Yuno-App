import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { ProductContext } from "../context/productContext";
import Payment from "../auth/Payment";
import NavBarMobile from "../layout/NavBarMobile";
import Wapper from "../../Style/ProductCartStyle";
import Header from "../layout/Header";
import { getUserFromLocalStorage } from "../localStorage";
import { getInformationUser } from "../localStorage";
import { useNavigate } from "react-router-dom";
const ProductCart = () => {
  const user = getUserFromLocalStorage();
  const information = getInformationUser();
  const navigate = useNavigate()
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
  const productIds = cart[0]?.product.map((product) => product.productIds);


  const handleBuyProduct = async () => {
    try {
      if(productCart.length==0){
        navigate("/");
        alert("Please add product !!!");
      }
     else if (!information || !information.address || !information.phoneNumber) {
        navigate("/profile");
        alert("Please add information !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (cart[0]?.product) {
      const reversedQuantity = cart[0]?.product.map(
        (product) => product.amount
      );

      setQuantity(reversedQuantity);
    }
  }, [cart]);

  useEffect(() => {
    if (products.length && quantity.length && productIds.length) {
      const updatedProductCart = products.filter((product) =>
        productIds.includes(product.id)
      ).map((product, index) => ({
        ...product,
        amount: quantity[index]
      }));
      setProductCart(updatedProductCart);
    }
  }, [products, quantity]);

  useEffect(() => {
    localStorage.setItem("cartTotalQuantity", productCart.length);
  }, [productCart]);

  const handleQuantityChange = (e, productId, index) => {
    const newQuantity = parseInt(e.target.value);
    const newQuantities = [...quantity];
    newQuantities[index] = newQuantity;
    setQuantity(newQuantities);
    editProductCart(user.uid, productId, newQuantity);
  };
  const removeProductCart = (productId) => {
    deleteProductCart(user.uid, productId);
    getCart()
  };
  console.log(productCart);
  return (
    <>
      <Header />
      <Wapper>
        <div className="small-container cart-page">
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
                      />
                      <div>
                        <p>{product.productName}</p>
                        <small>${product.salePrice}</small>
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
                      style={{ width: "15%", textAlign: "center" }}
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
                        parseFloat(product?.salePrice * (quantity[index] || 0))
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
                  <div onClick={handleBuyProduct} style={{ background: "red",cursor:"pointer" }}>payment</div>
                ) : (
                  <div onClick={handleBuyProduct}><Payment
                  total={
                    productCart.reduce((total, product, index) => {
                      return (
                        total +
                        parseFloat(product.salePrice * (quantity[index] || 0))
                      );
                    }, 0) + 30
                  }
                  productCart={productCart}
                /></div>
                 
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Wapper>
      <NavBarMobile />
    </>
  );
};

export default ProductCart;
