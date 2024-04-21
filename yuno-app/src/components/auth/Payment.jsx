import React, { useState, useContext, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { getUserFromLocalStorage, getInformationUser } from "../localStorage";
import Stripe from "stripe";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Payment = ({ total, productCart }) => {
  // console.log(productCart);
  const navigate = useNavigate();
  const user = getInformationUser();
  const stripe = new Stripe(
    "sk_test_51LbyNZFYvAR2okGPH5W9yBKhqohbFj9HLTdN8kootT9igdoSo8LNoRlxptCSQUQaqiGaiWIN13R0b4YNEKRzulqd00tCD5PtDY"
  );
  const ordersCollectionRef = collection(db, "orders");
  const handleToken = async (token) => {
    const customer = await createStripeCustomer(token);

    if (!customer) {
      console.log("Error creating customer");
      return;
    }

    const attachedCard = await attachCardToCustomer(token, customer.id);

    if (!attachedCard) {
      console.log("Error attaching card to customer");
      return;
    }

    const charge = await createCharge(
      total,
      customer.id,
      attachedCard.id,
      user.email
    );

    if (!charge) {
      console.log("Error creating charge");
      return;
    }
  };

  const createStripeCustomer = async (token) => {
    try {
      const customer = await stripe.customers.create({
        email: user.email,
      });
      return customer;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const attachCardToCustomer = async (token, customerId) => {
    try {
      const attachedCard = await stripe.customers.createSource(customerId, {
        source: token.id,
      });
      return attachedCard;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const createCharge = async (total, customerId, cardId, userEmail) => {
    try {
      const charge = await stripe.charges.create({
        amount: total * 100,
        currency: "USD",
        customer: customerId,
        source: cardId,
        receipt_email: userEmail,
        description: "Yuno-App",
      });
      if (Array.isArray(productCart)) {
        const productObject = productCart.reduce((obj, product, index) => {
          obj[index] = product;
          return obj;
        }, {});
        console.log(productObject);
        await addDoc(ordersCollectionRef, {
          user: user.name,
          product: [productObject],
          status: "pending",
          total: total * 100,
          uid: user.uid,
          address: user.address,
          phoneNumber: user.phoneNumber,
        });
        alert("DONEEEEEEEEEEEEEEE");
        navigate("/profile");
      } else {
        const arrayData = Object.values({productCart});
        const productObject = arrayData.reduce((obj, product, index) => {
          obj[index] = product;
          return obj;
        }, {});
        await addDoc(ordersCollectionRef, {
          user: user.name,
          product: [productObject],
          status: "pending",
          total: total * 100,
          uid: user.uid,
          address: user.address,
          phoneNumber: user.phoneNumber,
          amount:productCart.amount
        });
        alert("DONEEEEEEEEEEEEEEE");
        navigate("/profile");
      }
      return charge;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <div className="App">
      <StripeCheckout
        stripeKey={
          "pk_test_51LbyNZFYvAR2okGPyqpV3A7965cBfOXkgkSBZTI2op80xFJdjHwHCOCsV2EGBdldK2jZMQS3mGHEhbCq9rSS8eLG00SEJdxO3x"
        }
        name="Yuno App"
        email="info@yunoApp.com"
        token={handleToken}
        currency="USD"
        amount={total * 100}
      >
        <button style={{ background: "red", minWidth: "100%" }}>payment</button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
