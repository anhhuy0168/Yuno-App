import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
const ViewProducts = () => {
  const { productState: { products }, getProduct } = useContext(ProductContext);
  const [randomProducts1, setRandomProducts1] = useState([]);
  const [randomProducts2, setRandomProducts2] = useState([]);

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
              <div className="showcase" key={index} style={{marginBottom:"10px"}}>
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
      <div className="product-showcase">
        <h2 className="title">Trending</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container" >
            {/* Hiển thị randomProducts2 */}
            {randomProducts2.map((product, index) => (
                 <Link to={`/productDetail/${product.id}`}>
                 <div className="showcase" key={index} style={{marginBottom:"10px"}}>
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
