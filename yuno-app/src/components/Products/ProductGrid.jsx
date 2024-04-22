import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const ProductGrid = ({ randomProductsList }) => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <main>
      <div className="product-container">
        <div>
          <div className="product-box">
            <div className="product-main">
              <h2 className="title">New Products</h2>
              <div className="product-grid">
                {randomProductsList.map((product, index) => (
                  <div
                    className="showcase"
                    key={index}
                    style={{ cursor: "pointer" }}
                    data-aos="fade-up"
                    data-aos-delay={index*100}
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                  >
                    <Link to={`/productDetail/${product.id}`}>
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
                        <span href="#" className="showcase-category">
                          {product.category}
                        </span>

                        <h3 className="showcase-title">
                          {product.productName}
                        </h3>

                        <div className="showcase-rating">
                          <FaStar size={10} style={{ color: "yellow" }} />
                          <FaStar size={10} style={{ color: "yellow" }} />
                          <FaStar size={10} style={{ color: "yellow" }} />
                          <FaStar size={10} style={{ color: "yellow" }} />
                          <FaStar size={10} style={{ color: "yellow" }} />
                        </div>
                        <div className="price-box">
                          <p className="price">${product.salePrice}</p>
                          <del>${product.currentPrice}</del>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductGrid;
