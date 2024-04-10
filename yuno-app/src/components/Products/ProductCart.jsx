import React from "react";
import { CartContext } from "../context/cartContext";
import { useContext, useEffect, useState } from "react";
import useUserFromLocalStorage from "../../hook/useUserFromLocalStorage";
import { ProductContext } from "../context/productContext";
import Payment from "../auth/Payment";
const ProductCart = () => {
  const { cartState, getCart } = useContext(CartContext);
  const user = useUserFromLocalStorage();
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  useEffect(() => {
    getCart();
    getProduct();
  }, []);
  const filteredCarts = cartState.listProductCart.filter(
    (cart) => cart.userId === user?.uid
  );
  const productIds = filteredCarts.map((cart) => cart.productIds).join(",");
  const productCart = products.filter((product) => product.id === productIds);

  return (
    <>
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
              <img src={product.productImage} width="200px" height="200px" />
              <div>
                <p>{product.productName}</p>
                <small>${product.salePrice}.00</small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" defaultValue={1} />
          </td>
          <td>${product.salePrice}.00</td>
        </tr>
             ))}
      </tbody>
    </table>
    <div className="total-price">
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${productCart.reduce((total, product) => total + product.salePrice, 0)}.00</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${productCart.reduce((total, product) => total + product.salePrice, 0) + 30}.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<Payment/>
</>

  )
};

export default ProductCart;
