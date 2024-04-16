import React, { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "../localStorage";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase-config";
import Wrapper from "../../Style/PaymentHistory";
import Header from "../layout/Header"
const PaymentHistory = () => {
  const users = getUserFromLocalStorage();
  const [orders, setOrders] = useState([]);
  const ordersCollectionRef = collection(db, "orders");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!users) return; // Ensure users is not null or undefined

      const q = query(ordersCollectionRef, where("uid", "==", users.uid));
      const querySnapshot = await getDocs(q);

      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(ordersData);
    };

    fetchOrders();
  }, []); // Add users to the dependency array
  console.log(orders);
  return (
    <>
    <Header/>
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Address</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>12h</td>
              <td>{order.user}</td>
              <td>{order.address}</td>
              <td>
                {order.product.map((product, index) => (
                  <div key={index}>
                    <img
                      src={product.productImage}
                      width={50}
                      height={50}
                      alt={product.productName}
                    />
                    <p>{product.productName}</p>
                    <p>Category: {product.category}</p>
                    <p>Current Price: {product.currentPrice}</p>
                    <p>Sale Price: {product.salePrice}</p>
                    <p>Amount: {product.amount}</p>
                  </div>
                ))}
              </td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
    </>
  );
};

export default PaymentHistory;
