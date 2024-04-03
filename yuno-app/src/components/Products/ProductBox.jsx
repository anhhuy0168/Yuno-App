import React from 'react'

const ProductBox = () => {
  return (
    <>
    <main>
    <div className="product-container">
        <div className="container">
        <div className="product-box">
          {/*
      - PRODUCT MINIMAL
    */}
              {/* <div className="product-minimal">
                <div className="product-showcase">
                  <h2 className="title">New Arrivals</h2>
                  <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/clothes-1.jpg"
                            alt="relaxed short full sleeve t-shirt"
                            width={70}
                            className="showcase-img"
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Relaxed Short full Sleeve T-Shirt
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Clothes
                          </a>
                          <div className="price-box">
                            <p className="price">$45.00</p>
                            <del>$12.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/clothes-2.jpg"
                            alt="girls pink embro design top"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Girls pnk Embro design Top
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Clothes
                          </a>
                          <div className="price-box">
                            <p className="price">$61.00</p>
                            <del>$9.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/clothes-3.jpg"
                            alt="black floral wrap midi skirt"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Black Floral Wrap Midi Skirt
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Clothes
                          </a>
                          <div className="price-box">
                            <p className="price">$76.00</p>
                            <del>$25.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shirt-1.jpg"
                            alt="pure garment dyed cotton shirt"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Pure Garment Dyed Cotton Shirt
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Mens Fashion
                          </a>
                          <div className="price-box">
                            <p className="price">$68.00</p>
                            <del>$31.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="showcase-container">
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/jacket-5.jpg"
                            alt="men yarn fleece full-zip jacket"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              MEN Yarn Fleece Full-Zip Jacket
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Winter wear
                          </a>
                          <div className="price-box">
                            <p className="price">$61.00</p>
                            <del>$11.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/jacket-1.jpg"
                            alt="mens winter leathers jackets"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Mens Winter Leathers Jackets
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Winter wear
                          </a>
                          <div className="price-box">
                            <p className="price">$32.00</p>
                            <del>$20.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/jacket-3.jpg"
                            alt="mens winter leathers jackets"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Mens Winter Leathers Jackets
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Jackets
                          </a>
                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$25.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shorts-1.jpg"
                            alt="better basics french terry sweatshorts"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Better Basics French Terry Sweatshorts
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Shorts
                          </a>
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$10.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-showcase">
                  <h2 className="title">Trending</h2>
                  <div className="showcase-wrapper  has-scrollbar">
                    <div className="showcase-container">
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/sports-1.jpg"
                            alt="running & trekking shoes - white"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Running &amp; Trekking Shoes - White
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Sports
                          </a>
                          <div className="price-box">
                            <p className="price">$49.00</p>
                            <del>$15.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/sports-2.jpg"
                            alt="trekking & running shoes - black"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Trekking &amp; Running Shoes - black
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Sports
                          </a>
                          <div className="price-box">
                            <p className="price">$78.00</p>
                            <del>$36.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/party-wear-1.jpg"
                            alt="womens party wear shoes"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Womens Party Wear Shoes
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Party wear
                          </a>
                          <div className="price-box">
                            <p className="price">$94.00</p>
                            <del>$42.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/sports-3.jpg"
                            alt="sports claw women's shoes"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Sports Claw Women's Shoes
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Sports
                          </a>
                          <div className="price-box">
                            <p className="price">$54.00</p>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="showcase-container">
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/sports-6.jpg"
                            alt="air tekking shoes - white"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Air Trekking Shoes - white
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Sports
                          </a>
                          <div className="price-box">
                            <p className="price">$52.00</p>
                            <del>$55.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shoe-3.jpg"
                            alt="Boot With Suede Detail"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Boot With Suede Detail
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            boots
                          </a>
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shoe-1.jpg"
                            alt="men's leather formal wear shoes"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Men's Leather Formal Wear shoes
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            formal
                          </a>
                          <div className="price-box">
                            <p className="price">$56.00</p>
                            <del>$78.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shoe-2.jpg"
                            alt="casual men's brown shoes"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Casual Men's Brown shoes
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Casual
                          </a>
                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$55.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-showcase">
                  <h2 className="title">Top Rated</h2>
                  <div className="showcase-wrapper  has-scrollbar">
                    <div className="showcase-container">
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/watch-3.jpg"
                            alt="pocket watch leather pouch"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Pocket Watch Leather Pouch
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Watches
                          </a>
                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$34.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/jewellery-3.jpg"
                            alt="silver deer heart necklace"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Silver Deer Heart Necklace
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Jewellery
                          </a>
                          <div className="price-box">
                            <p className="price">$84.00</p>
                            <del>$30.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/perfume.jpg"
                            alt="titan 100 ml womens perfume"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Titan 100 Ml Womens Perfume
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Perfume
                          </a>
                          <div className="price-box">
                            <p className="price">$42.00</p>
                            <del>$10.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/belt.jpg"
                            alt="men's leather reversible belt"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Men's Leather Reversible Belt
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Belt
                          </a>
                          <div className="price-box">
                            <p className="price">$24.00</p>
                            <del>$10.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="showcase-container">
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/jewellery-2.jpg"
                            alt="platinum zircon classic ring"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              platinum Zircon Classic Ring
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            jewellery
                          </a>
                          <div className="price-box">
                            <p className="price">$62.00</p>
                            <del>$65.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/watch-1.jpg"
                            alt="smart watche vital plus"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Smart watche Vital Plus
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Watches
                          </a>
                          <div className="price-box">
                            <p className="price">$56.00</p>
                            <del>$78.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shampoo.jpg"
                            alt="shampoo conditioner packs"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              shampoo conditioner packs
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            cosmetics
                          </a>
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/jewellery-1.jpg"
                            alt="rose gold peacock earrings"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Rose Gold Peacock Earrings
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            jewellery
                          </a>
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/jacket-3.jpg"
                          alt="Mens Winter Leathers Jackets"
                          width={300}
                          className="product-img default"
                        />
                        <img
                          src="../src/assets/images/products/jacket-4.jpg"
                          alt="Mens Winter Leathers Jackets"
                          width={300}
                          className="product-img hover"
                        />
                        <p className="showcase-badge">15%</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          jacket
                        </a>
                        <a href="#">
                          <h3 className="showcase-title">
                            Mens Winter Leathers Jackets
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
                          <p className="price">$48.00</p>
                          <del>$75.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/shirt-1.jpg"
                          alt="Pure Garment Dyed Cotton Shirt"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/shirt-2.jpg"
                          alt="Pure Garment Dyed Cotton Shirt"
                          className="product-img hover"
                          width={300}
                        />
                        <p className="showcase-badge angle black">sale</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          shirt
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Pure Garment Dyed Cotton Shirt
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$45.00</p>
                          <del>$56.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/jacket-5.jpg"
                          alt="MEN Yarn Fleece Full-Zip Jacket"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/jacket-6.jpg"
                          alt="MEN Yarn Fleece Full-Zip Jacket"
                          className="product-img hover"
                          width={300}
                        />
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          Jacket
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            MEN Yarn Fleece Full-Zip Jacket
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$58.00</p>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/clothes-3.jpg"
                          alt="Black Floral Wrap Midi Skirt"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/clothes-4.jpg"
                          alt="Black Floral Wrap Midi Skirt"
                          className="product-img hover"
                          width={300}
                        />
                        <p className="showcase-badge angle pink">new</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          skirt
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Black Floral Wrap Midi Skirt
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                        </div>
                        <div className="price-box">
                          <p className="price">$25.00</p>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/shoe-2.jpg"
                          alt="Casual Men's Brown shoes"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/shoe-2_1.jpg"
                          alt="Casual Men's Brown shoes"
                          className="product-img hover"
                          width={300}
                        />
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          casual
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Casual Men's Brown shoes
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                        </div>
                        <div className="price-box">
                          <p className="price">$99.00</p>
                          <del>$105.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/watch-3.jpg"
                          alt="Pocket Watch Leather Pouch"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/watch-4.jpg"
                          alt="Pocket Watch Leather Pouch"
                          className="product-img hover"
                          width={300}
                        />
                        <p className="showcase-badge angle black">sale</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          watches
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Pocket Watch Leather Pouch
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$150.00</p>
                          <del>$170.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/watch-1.jpg"
                          alt="Smart watche Vital Plus"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/watch-2.jpg"
                          alt="Smart watche Vital Plus"
                          className="product-img hover"
                          width={300}
                        />
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          watches
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Smart watche Vital Plus
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$100.00</p>
                          <del>$120.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/party-wear-1.jpg"
                          alt="Womens Party Wear Shoes"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/party-wear-2.jpg"
                          alt="Womens Party Wear Shoes"
                          className="product-img hover"
                          width={300}
                        />
                        <p className="showcase-badge angle black">sale</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          party wear
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Womens Party Wear Shoes
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$25.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/jacket-1.jpg"
                          alt="Mens Winter Leathers Jackets"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/jacket-2.jpg"
                          alt="Mens Winter Leathers Jackets"
                          className="product-img hover"
                          width={300}
                        />
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          jacket
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Mens Winter Leathers Jackets
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$32.00</p>
                          <del>$45.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/sports-2.jpg"
                          alt="Trekking & Running Shoes - black"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/sports-4.jpg"
                          alt="Trekking & Running Shoes - black"
                          className="product-img hover"
                          width={300}
                        />
                        <p className="showcase-badge angle black">sale</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          sports
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Trekking &amp; Running Shoes - black
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$58.00</p>
                          <del>$64.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/shoe-1.jpg"
                          alt="Men's Leather Formal Wear shoes"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/shoe-1_1.jpg"
                          alt="Men's Leather Formal Wear shoes"
                          className="product-img hover"
                          width={300}
                        />
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          formal
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Men's Leather Formal Wear shoes
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img
                          src="../src/assets/images/products/shorts-1.jpg"
                          alt="Better Basics French Terry Sweatshorts"
                          className="product-img default"
                          width={300}
                        />
                        <img
                          src="../src/assets/images/products/shorts-2.jpg"
                          alt="Better Basics French Terry Sweatshorts"
                          className="product-img hover"
                          width={300}
                        />
                        <p className="showcase-badge angle black">sale</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="eye-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="repeat-outline" />
                          </button>
                          <button className="btn-action">
                            <ion-icon name="bag-add-outline" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          shorts
                        </a>
                        <h3>
                          <a href="#" className="showcase-title">
                            Better Basics French Terry Sweatshorts
                          </a>
                        </h3>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">$78.00</p>
                          <del>$85.00</del>
                        </div>
                      </div>
                    </div>
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