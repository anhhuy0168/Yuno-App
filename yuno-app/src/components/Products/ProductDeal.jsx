import React from 'react'
import { FaStar } from "react-icons/fa";
import { getUserFromLocalStorage } from '../localStorage';
import { useContext, useEffect, useState } from "react";
import { ProductContext } from '../context/productContext';
import { CartContext } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';
const ProductDeal = ({ product, timeCount }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  const { addProductToCart } = useContext(CartContext);
  const selectedProduct = products.find((products) => products.id === product[0]?.id);
  const handleAddToCart = async () => {
    if(user==null){
      navigate("/login")
    }
    else{
      const productId = selectedProduct?.id;
      const userId = user.uid;
      const amount = 1
      await addProductToCart(userId, productId, amount);
    }

  };
  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    setUser(userFromLocalStorage);
  }, []);
  return (
    <div className="product-featured">
    <h2 className="title">Deal of the day</h2>
    <div className="showcase-wrapper has-scrollbar">
      
      <div className="showcase-container">
        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={product[0]?.productImage}
              alt="shampoo, conditioner & facewash packs"
              className="showcase-img"
            />
          </div>
          <div className="showcase-content">
            <div className="showcase-rating">
            <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
            </div>
            <a href="#">
              <h3 className="showcase-title">
                {product[0]?.productName}
              </h3>
            </a>
            <p className="showcase-desc">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum
              dolor dolor sit amet consectetur Lorem ipsum dolor
            </p>
            <div className="price-box">
              <p className="price">
                ${product[0]?.salePrice}
              </p>
              <del>${product[0]?.currentPrice}</del>
            </div>
            <button className="add-cart-btn" onClick={handleAddToCart}>add to cart</button>
            <div className="showcase-status">
              <div className="wrapper">
                <p>
                  already sold: <b>20</b>
                </p>
                <p>
                  available: <b>40</b>
                </p>
              </div>
              <div className="showcase-status-bar" />
            </div>
            <div className="countdown-box">
              <p className="countdown-desc">
                Hurry Up! Offer ends in:
              </p>
              <div className="countdown">
                <div className="countdown-content">
                  <p className="display-number">{timeCount.hours}</p>
                  <p className="display-text">Hours</p>
                </div>
                <div className="countdown-content">
                  <p className="display-number">
                    {timeCount.minutes}
                  </p>
                  <p className="display-text">Min</p>
                </div>
                <div className="countdown-content">
                  <p className="display-number">
                    {timeCount.seconds}
                  </p>
                  <p className="display-text">Sec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-container">
        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={product[1]?.productImage}
              alt="shampoo, conditioner & facewash packs"
              className="showcase-img"
            />
          </div>
          <div className="showcase-content">
            <div className="showcase-rating">
            <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
                    <FaStar style={{color:"yellow"}}/>
            </div>
            <a href="#">
              <h3 className="showcase-title">
                {product[1]?.productName}
              </h3>
            </a>
            <p className="showcase-desc">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum
              dolor dolor sit amet consectetur Lorem ipsum dolor
            </p>
            <div className="price-box">
              <p className="price">
                ${product[1]?.salePrice}
              </p>
              <del>${product[1]?.currentPrice}</del>
            </div>
            <button className="add-cart-btn">add to cart</button>
            <div className="showcase-status">
              <div className="wrapper">
                <p>
                  already sold: <b>20</b>
                </p>
                <p>
                  available: <b>40</b>
                </p>
              </div>
              <div className="showcase-status-bar" />
            </div>      
            <div className="countdown-box">
              <p className="countdown-desc">
                Hurry Up! Offer ends in:
              </p>
              <div className="countdown">
                <div className="countdown-content">
                  <p className="display-number">{timeCount.hours}</p>
                  <p className="display-text">Hours</p>
                </div>
                <div className="countdown-content">
                  <p className="display-number">
                    {timeCount.minutes}
                  </p>
                  <p className="display-text">Min</p>
                </div>
                <div className="countdown-content">
                  <p className="display-number">
                    {timeCount.seconds}
                  </p>
                  <p className="display-text">Sec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDeal