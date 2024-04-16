import React, { useState, useEffect } from "react";
import Wrapper from "../../Style/ProductCartStyle";
import Header from "../layout/Header";
import Payment from "./Payment";
import { getOrder } from "../localStorage";

const OrderAuth = () => {
  const [order, setOrder] = useState(getOrder());
  const [amount, setAmount] = useState(order ? order.amount : 1);

  useEffect(() => {
    // Tính toán lại Subtotal và Total khi amount thay đổi
    if (order) {
      const newOrder = { ...order, amount: amount };
      setOrder(newOrder);
    }
  }, [amount]);

  const handleAmountChange = (e) => {
    const newAmount = parseInt(e.target.value);
    setAmount(newAmount);
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
                      src={order.productImage}
                      width="200px"
                      height="200px"
                    />
                    <div>
                      <p>{order.productName}</p>
                      <small>{order.salePrice}.00$</small>
                      <br />
                    </div>
                  </div>
                </td>
                <td>
                  <input
                    style={{width: '20%',}}
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </td>
                <td>${order.salePrice * amount}.00</td>
              </tr>
            </tbody>
          </table>
          <div className="total-price">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${order.salePrice * amount}.00</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>$30.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${order.salePrice * amount + 30}.00</td>
                </tr>
              </tbody>
              <Payment total={order.salePrice * amount + 30} productCart={order}/>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default OrderAuth;
