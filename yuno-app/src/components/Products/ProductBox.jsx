import React from "react";
import { ProductContext } from "../context/productContext";
import { useEffect, useContext, useState } from "react";
import ProductDeal from "./ProductDeal";
import ProductGrid from "./ProductGrid";
const ProductBox = () => {
  const [randomProductsDeal, setRandomProductsDeal] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      const shuffledProducts = products.sort(() => 0.5 - Math.random());
      const selectedProductsDeal = shuffledProducts.slice(0, 2);
      setRandomProductsDeal(selectedProductsDeal);
    }
  }, [products]);
  useEffect(() => {
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div class="product-featured">
        <ProductDeal product={randomProductsDeal} timeCount={timeLeft} />
      </div>
    </>
  );
};

export default ProductBox;
