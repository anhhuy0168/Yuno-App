import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const ViewProducts = () => {
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  const [randomProducts1, setRandomProducts1] = useState([]);
  const [randomProducts2, setRandomProducts2] = useState([]);
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  useEffect(() => {
    // Tạo danh sách sản phẩm ngẫu nhiên
    const getRandomProducts = (arr, n) => {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    };

    // Tạo hai danh sách sản phẩm ngẫu nhiên
    setRandomProducts1(getRandomProducts(products, 4));
    setRandomProducts2(getRandomProducts(products, 4));
  }, [products]);

  return (
    <div className="product-minimal">
      <div className="product-showcase">
        <h2 className="title">New Arrivals</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {randomProducts1.map((product, index) => (
              <Link to={`/productDetail/${product.id}`}>
                <div
                  className="showcase"
                  key={index}
                  style={{ marginBottom: "10px" }}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <a href="#" className="showcase-img-box">
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      width={70}
                      className="showcase-img"
                    />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{product.productName}</h4>
                    </a>
                    <a href="#" className="showcase-category">
                      {product.category}
                    </a>
                    <div className="price-box">
                      <p className="price">${product.salePrice}.00</p>
                      <del>${product.currentPrice}.00</del>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="product-showcase" >
        <h2 className="title">Trending</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {/* Hiển thị randomProducts2 */}
            {randomProducts2.map((product, index) => (
              <Link to={`/productDetail/${product.id}`} style={{overflow:"hidden"}}>
                <div
                  className="showcase"
                  key={index}
                  style={{ marginBottom: "10px" }}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <a href="#" className="showcase-img-box">
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      width={70}
                      className="showcase-img"
                    />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{product.productName}</h4>
                    </a>
                    <a href="#" className="showcase-category">
                      {product.category}
                    </a>
                    <div className="price-box">
                      <p className="price">${product.salePrice}.00</p>
                      <del>${product.currentPrice}.00</del>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
