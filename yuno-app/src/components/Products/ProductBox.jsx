import React from 'react'
import { ProductContext } from "../context/productContext";
import  { useEffect, useContext,useState } from "react";

const ProductBox = () => {
  const [randomProducts, setRandomProducts] = useState([]);
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
      const selectedProducts = shuffledProducts.slice(0, 12);
      setRandomProducts(selectedProducts);
    }
  }, [products]);
  return (
    <>
    <main>
    <div className="product-container">
        <div className="container">
        <div className="product-box">
          {/*
      - PRODUCT FEATURED
    */}
              <div className="product-featured">
                <h2 className="title">Deal of the day</h2>
                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/shampoo.jpg"
                          alt="shampoo, conditioner & facewash packs"
                          className="showcase-img"
                        />
                      </div>
                      <div className="showcase-content">
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <a href="#">
                          <h3 className="showcase-title">
                            shampoo, conditioner &amp; facewash packs
                          </h3>
                        </a>
                        <p className="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                          dolor sit amet consectetur Lorem ipsum dolor
                        </p>
                        <div className="price-box">
                          <p className="price">$150.00</p>
                          <del>$200.00</del>
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
                          <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                          <div className="countdown">
                            <div className="countdown-content">
                              <p className="display-number">360</p>
                              <p className="display-text">Days</p>
                            </div>
                            <div className="countdown-content">
                              <p className="display-number">24</p>
                              <p className="display-text">Hours</p>
                            </div>
                            <div className="countdown-content">
                              <p className="display-number">59</p>
                              <p className="display-text">Min</p>
                            </div>
                            <div className="countdown-content">
                              <p className="display-number">00</p>
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
                          src="../src/assets/images/products/jewellery-1.jpg"
                          alt="Rose Gold diamonds Earring"
                          className="showcase-img"
                        />
                      </div>
                      <div className="showcase-content">
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <h3 className="showcase-title">
                          <a href="#" className="showcase-title">
                            Rose Gold diamonds Earring
                          </a>
                        </h3>
                        <p className="showcase-desc">
                          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                          dolor sit amet consectetur Lorem ipsum dolor
                        </p>
                        <div className="price-box">
                          <p className="price">$1990.00</p>
                          <del>$2000.00</del>
                        </div>
                        <button className="add-cart-btn">add to cart</button>
                        <div className="showcase-status">
                          <div className="wrapper">
                            <p>
                              {" "}
                              already sold: <b>15</b>{" "}
                            </p>
                            <p>
                              {" "}
                              available: <b>40</b>{" "}
                            </p>
                          </div>
                          <div className="showcase-status-bar" />
                        </div>
                        <div className="countdown-box">
                          <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                          <div className="countdown">
                            <div className="countdown-content">
                              <p className="display-number">360</p>
                              <p className="display-text">Days</p>
                            </div>
                            <div className="countdown-content">
                              <p className="display-number">24</p>
                              <p className="display-text">Hours</p>
                            </div>
                            <div className="countdown-content">
                              <p className="display-number">59</p>
                              <p className="display-text">Min</p>
                            </div>
                            <div className="countdown-content">
                              <p className="display-number">00</p>
                              <p className="display-text">Sec</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          {/*
      - PRODUCT GRID
          */}
                <div className="product-main">
                  <h2 className="title">New Products</h2>
                  <div className="product-grid">
                  {randomProducts.map((product, index) => (
                    <div className="showcase" key={index}>
                      <div className="showcase-banner">
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          width={300}
                          className="product-img default"
                        />
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          width={300}
                          className="product-img hover"
                        />
                        <p className="showcase-badge">15%</p>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                        {product.category}
                        </a>
                        <a href="#">
                          <h3 className="showcase-title">
                          {product.productName}
                          </h3>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">${product.salePrice}</p>
                          <del>${product.currentPrice}</del>    
                        </div>
                      </div>
                    </div>
                           ))}
                  </div>
                </div>
        </div>
        </div>
    </div>
    </main>

      
    </>
  )
}

export default ProductBox