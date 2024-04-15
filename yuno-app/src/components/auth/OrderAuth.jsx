import React, { useState, useEffect } from "react";
import Wrapper from "../../Style/ProductCartStyle";
import Header from "../layout/Header";
import Payment from "./Payment";
import { getOrder } from "../localStorage";

const OrderAuth = () => {
  const initialOrder = getOrder();
  const [order, setOrder] = useState(initialOrder);
  const [amount, setAmount] = useState(initialOrder ? initialOrder.amount : 1);

  useEffect(() => {
    // Tính toán lại Subtotal và Total khi amount thay đổi
    if (initialOrder) {
      const newOrder = { ...initialOrder, amount: amount };
      setOrder(newOrder);
    }
  }, [amount]);

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="small-container cart-page">
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              <tr>
                <td>
                  <div className="cart-info">
                    <img
                      src={order.selectedProduct.productImage}
                      width="200px"
                      height="200px"
                    />
                    <div>
                      <p>{order.selectedProduct.productName}</p>
                      <small>{order.selectedProduct.salePrice}.00$</small>
                      <br />
                    </div>
                  </div>
                </td>
                <td>
                  {/* Sử dụng input có khả năng chỉnh sửa */}
                  <input
                  style={{width: '20%',}}
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </td>
                <td>${order.selectedProduct.salePrice * amount}.00</td>
              </tr>
            </tbody>
          </table>
          <div className="total-price">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>
                    ${order.selectedProduct.salePrice * amount}.00
                  </td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>$30.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>
                    ${order.selectedProduct.salePrice * amount + 30}.00
                  </td>
                </tr>
              </tbody>
              <Payment total={order.selectedProduct.salePrice * amount + 30} productCart={order.selectedProduct}/>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default OrderAuth;
