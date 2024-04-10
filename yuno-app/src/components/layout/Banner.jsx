import React from "react";
import { Carousel } from "antd";
const Navigation = () => {
  return (
    <>
      <main>
        <div className="banner">
          <div className="container">
              <Carousel autoplay>
                <div className="slider-item">
                  <img
                    src= "https://res.cloudinary.com/da3bmd8ak/image/upload/v1712735573/banner-1_mfku0h.jpg"
                    alt="women's latest fashion sale"
                    className="banner-img"
                  />
                  <div className="banner-content">
                    <p className="banner-subtitle">Trending item</p>
                    <h2 className="banner-title">
                      Women's latest fashion sale
                    </h2>
                    <p className="banner-text">
                      starting at $ <b>20</b>.00
                    </p>
                    <a href="#" className="banner-btn">
                      Shop now
                    </a>
                  </div>
                </div>
                <div className="slider-item">
                  <img
                    src= "https://res.cloudinary.com/da3bmd8ak/image/upload/v1712735573/banner-2_stjpih.jpg"
                    alt="modern sunglasses"
                    className="banner-img"
                  />
                  <div className="banner-content">
                    <p className="banner-subtitle">Trending accessories</p>
                    <h2 className="banner-title">Modern sunglasses</h2>
                    <p className="banner-text">
                      starting at $ <b>15</b>.00
                    </p>
                    <a href="#" className="banner-btn">
                      Shop now
                    </a>
                  </div>
                </div>
                <div className="slider-item">
                  <img
                    src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1712735574/banner-3_duo8zu.jpg"
                    alt="new fashion summer sale"
                    className="banner-img"
                  />
                  <div className="banner-content">
                    <p className="banner-subtitle">Sale Offer</p>
                    <h2 className="banner-title">New fashion summer sale</h2>
                    <p className="banner-text">
                      starting at $ <b>29</b>.99
                    </p>
                    <a href="#" className="banner-btn">
                      Shop now
                    </a>
                  </div>
                </div>
              </Carousel>  
          </div>
        </div>
      </main>
    </>
  );
};

export default Navigation;
