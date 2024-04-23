import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/productContext";
import Header from "./Header";
import "../../Style/Homepage.scss";
import { Link } from "react-router-dom";

const SearchProduct = () => {
  const [suggestions, setSuggestions] = useState([]);
  const storedNameProduct = localStorage.getItem("nameProduct");
  const parsedData = JSON.parse(storedNameProduct);
  const { productState: { products }, getProduct } = useContext(ProductContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.productName.toLowerCase().includes(parsedData.searchTerm.toLowerCase());
    });
    setSuggestions(filteredProducts);
    setSearchResults(filteredProducts.length > 0 ? filteredProducts : []);
  }, [products, storedNameProduct]);
  return (
    <>
      <Header />
      <main>
        <div className="product-container" style={{paddingLeft:"20%",marginTop:"3%",paddingRight:"20%"}}>
          {searchResults.length > 0 ? (
            <div className="product-box">
              <div className="product-main">
                <div className="product-grid">
                  {searchResults.map((product, index) => (
                    <div className="showcase" key={index} style={{cursor:"pointer"}}>
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
          ) : (
            <p style={{ textAlign: "center",margin:"30px" }}>No products matched...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default SearchProduct;
