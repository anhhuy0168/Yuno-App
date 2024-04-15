import React, { useState, useContext, useEffect } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { getUserFromLocalStorage } from "../localStorage";
import Stripe from 'stripe';
const Payment = ({total}) => {
const user= getUserFromLocalStorage()
  const stripe = new Stripe('sk_test_51LbyNZFYvAR2okGPH5W9yBKhqohbFj9HLTdN8kootT9igdoSo8LNoRlxptCSQUQaqiGaiWIN13R0b4YNEKRzulqd00tCD5PtDY');
  const handleToken = async  (token) => {
    const  customer   = await  stripe.customers
      .create({
        email:user.email,
      })
      .catch((e) => {
        console.log(e);
        return null;
      });

    if (!customer ) {
     console.log("co loi");
    }



    const attachedCard = await stripe.customers.createSource(customer.id, {
      source: token.id, // Token thẻ được truyền từ Stripe Checkout
    });

    if (!attachedCard) {
      console.log("Failed to attach card to customer");
      return;
    }
    const invoiceId = `${
      token.email
    }-${Math.random().toString()}-${Date.now().toString()}`;
  
    const charge =  stripe.charges.create(
      {
        amount: total*100,
        currency: "USD",
        customer: customer.id,
        source: attachedCard.id,
        receipt_email: user.email,
        description: "Yuno-App",
      },
      { idempotencyKey: invoiceId }
    );
    if (!charge) {
      res.status(500).json({ success: false });
      return;
    }
  };
  return (
    <div className="App" >
      <StripeCheckout
        stripeKey={
          "pk_test_51LbyNZFYvAR2okGPyqpV3A7965cBfOXkgkSBZTI2op80xFJdjHwHCOCsV2EGBdldK2jZMQS3mGHEhbCq9rSS8eLG00SEJdxO3x"
        }
        name="Yuno App" 
        email="info@yunoApp.com"
        token={handleToken}
 
        currency="USD"
        amount={total*10}
      ><button style={{background:"red"}}>payment</button></StripeCheckout>
    </div>
  );
};

export default Payment;