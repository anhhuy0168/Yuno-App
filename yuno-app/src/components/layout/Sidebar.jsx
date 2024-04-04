import React from "react";
import { ProductContext } from "../context/productContext";
import { useEffect, useContext, useState } from "react";
import BestSeller from "./BestSeller";
import ViewProducts from "../Products/ViewProducts";
import ProductGrid from "../Products/ProductGrid";
import ProductBox from "../Products/ProductBox";
const Sidebar = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const { productState:{products},productState, getProduct } = useContext(ProductContext);
  const [randomProductsList, setRandomProductsList] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    const { products } = productState;
    if (products.length > 0) {
      const shuffledProducts = products.sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, 4);
      setRandomProducts(selectedProducts);
    }
  }, [productState]);
  useEffect(() => {
    if (products.length > 0) {
      const shuffledProducts = products.sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, 12);
      setRandomProductsList(selectedProducts);
    }
  }, [products]);
  return (
    <>
      <main>
        <div className="product-container">
          <div className="container">
            <div className="sidebar has-scrollbar" data-mobile-menu="">
              <div className="sidebar-category">
                <div className="sidebar-top">
                  <h2 className="sidebar-title">Category</h2>
                  <button
                    className="sidebar-close-btn"
                    data-mobile-menu-close-btn=""
                  >
                    <ion-icon name="close-outline" />
                  </button>
                </div>
                <ul className="sidebar-menu-category-list">
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn=""
                    >
                      <div className="menu-title-flex">
                        <img
                          src="../src/assets/images/icons/dress.svg"
                          alt="clothes"
                          width={20}
                          height={20}
                          className="menu-title-img"
                        />
                        <p className="menu-title">Clothes</p>
                      </div>
                    </button>
                  </li>
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn=""
                    >
                      <div className="menu-title-flex">
                        <img
                          src="../src/assets/images/icons/shoes.svg"
                          alt="footwear"
                          className="menu-title-img"
                          width={20}
                          height={20}
                        />
                        <p className="menu-title">Footwear</p>
                      </div>
                    </button>
                  </li>
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn=""
                    >
                      <div className="menu-title-flex">
                        <img
                          src="../src/assets/images/icons/jewelry.svg"
                          alt="clothes"
                          className="menu-title-img"
                          width={20}
                          height={20}
                        />
                        <p className="menu-title">Jewelry</p>
                      </div>
                    </button>
                  </li>
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn=""
                    >
                      <div className="menu-title-flex">
                        <img
                          src="../src/assets/images/icons/perfume.svg"
                          alt="perfume"
                          className="menu-title-img"
                          width={20}
                          height={20}
                        />
                        <p className="menu-title">Perfume</p>
                      </div>
                    </button>
                  </li>
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn=""
                    >
                      <div className="menu-title-flex">
                        <img
                          src="../src/assets/images/icons/cosmetics.svg"
                          alt="cosmetics"
                          className="menu-title-img"
                          width={20}
                          height={20}
                        />
                        <p className="menu-title">Cosmetics</p>
                      </div>
                    </button>
                  </li>
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn=""
                    >
                      <div className="menu-title-flex">
                        <img
                          src="../src/assets/images/icons/glasses.svg"
                          alt="glasses"
                          className="menu-title-img"
                          width={20}
                          height={20}
                        />
                        <p className="menu-title">Glasses</p>
                      </div>
                    </button>
                  </li>
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn=""
                    >
                      <div className="menu-title-flex">
                        <img
                          src="../src/assets/images/icons/bag.svg"
                          alt="bags"
                          className="menu-title-img"
                          width={20}
                          height={20}
                        />
                        <p className="menu-title">Bags</p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>        
              <BestSeller product={randomProducts} />
            </div>
            <div className="product-box">
              <ViewProducts product={randomProducts} />
              <ProductBox />
              <ProductGrid randomProductsList={randomProductsList} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sidebar;
