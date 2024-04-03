import React from "react";
import { ProductContext } from "../context/productContext";
import  { useEffect, useContext,useState } from "react";
const Sidebar = () => {
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
      const selectedProducts = shuffledProducts.slice(0, 4);
      setRandomProducts(selectedProducts);
    }
  }, [products]);
  return (
    <>
      <main>
        <div className="product-container">
          <div className="container">
            <div className="sidebar  has-scrollbar" data-mobile-menu="">
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
                      <div>
                        <ion-icon name="add-outline" className="add-icon" />
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        />
                      </div>
                    </button>
                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion=""
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shirt</p>
                          <data
                            value={300}
                            className="stock"
                            title="Available Stock"
                          >
                            300
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">shorts &amp; jeans</p>
                          <data
                            value={60}
                            className="stock"
                            title="Available Stock"
                          >
                            60
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">jacket</p>
                          <data
                            value={50}
                            className="stock"
                            title="Available Stock"
                          >
                            50
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">dress &amp; frock</p>
                          <data
                            value={87}
                            className="stock"
                            title="Available Stock"
                          >
                            87
                          </data>
                        </a>
                      </li>
                    </ul>
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
                      <div>
                        <ion-icon name="add-outline" className="add-icon" />
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        />
                      </div>
                    </button>
                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion=""
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sports</p>
                          <data
                            value={45}
                            className="stock"
                            title="Available Stock"
                          >
                            45
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Formal</p>
                          <data
                            value={75}
                            className="stock"
                            title="Available Stock"
                          >
                            75
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Casual</p>
                          <data
                            value={35}
                            className="stock"
                            title="Available Stock"
                          >
                            35
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Safety Shoes</p>
                          <data
                            value={26}
                            className="stock"
                            title="Available Stock"
                          >
                            26
                          </data>
                        </a>
                      </li>
                    </ul>
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
                      <div>
                        <ion-icon name="add-outline" className="add-icon" />
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        />
                      </div>
                    </button>
                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion=""
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Earrings</p>
                          <data
                            value={46}
                            className="stock"
                            title="Available Stock"
                          >
                            46
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Couple Rings</p>
                          <data
                            value={73}
                            className="stock"
                            title="Available Stock"
                          >
                            73
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Necklace</p>
                          <data
                            value={61}
                            className="stock"
                            title="Available Stock"
                          >
                            61
                          </data>
                        </a>
                      </li>
                    </ul>
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
                      <div>
                        <ion-icon name="add-outline" className="add-icon" />
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        />
                      </div>
                    </button>
                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion=""
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Clothes Perfume</p>
                          <data
                            value={12}
                            className="stock"
                            title="Available Stock"
                          >
                            12 pcs
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Deodorant</p>
                          <data
                            value={60}
                            className="stock"
                            title="Available Stock"
                          >
                            60 pcs
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">jacket</p>
                          <data
                            value={50}
                            className="stock"
                            title="Available Stock"
                          >
                            50 pcs
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">dress &amp; frock</p>
                          <data
                            value={87}
                            className="stock"
                            title="Available Stock"
                          >
                            87 pcs
                          </data>
                        </a>
                      </li>
                    </ul>
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
                      <div>
                        <ion-icon name="add-outline" className="add-icon" />
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        />
                      </div>
                    </button>
                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion=""
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shampoo</p>
                          <data
                            value={68}
                            className="stock"
                            title="Available Stock"
                          >
                            68
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sunscreen</p>
                          <data
                            value={46}
                            className="stock"
                            title="Available Stock"
                          >
                            46
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Body Wash</p>
                          <data
                            value={79}
                            className="stock"
                            title="Available Stock"
                          >
                            79
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Makeup Kit</p>
                          <data
                            value={23}
                            className="stock"
                            title="Available Stock"
                          >
                            23
                          </data>
                        </a>
                      </li>
                    </ul>
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
                      <div>
                        <ion-icon name="add-outline" className="add-icon" />
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        />
                      </div>
                    </button>
                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion=""
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sunglasses</p>
                          <data
                            value={50}
                            className="stock"
                            title="Available Stock"
                          >
                            50
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Lenses</p>
                          <data
                            value={48}
                            className="stock"
                            title="Available Stock"
                          >
                            48
                          </data>
                        </a>
                      </li>
                    </ul>
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
                      <div>
                        <ion-icon name="add-outline" className="add-icon" />
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        />
                      </div>
                    </button>
                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion=""
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shopping Bag</p>
                          <data
                            value={62}
                            className="stock"
                            title="Available Stock"
                          >
                            62
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Gym Backpack</p>
                          <data
                            value={35}
                            className="stock"
                            title="Available Stock"
                          >
                            35
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Purse</p>
                          <data
                            value={80}
                            className="stock"
                            title="Available Stock"
                          >
                            80
                          </data>
                        </a>
                      </li>
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Wallet</p>
                          <data
                            value={75}
                            className="stock"
                            title="Available Stock"
                          >
                            75
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="product-showcase">
              <h3 className="showcase-heading">best sellers</h3>
              <div className="showcase-wrapper">
                <div className="showcase-container">
                {randomProducts.map((product, index) => (
                  <div className="showcase" key={index}>
                    <a href="#" className="showcase-img-box">
                      <img
                        src={product.productImage}
                        alt={product.productName}
                        width={75}
                        height={75}
                        className="showcase-img"
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">{product.productName}</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <div className="price-box">
                        <del>${product.currentPrice}.00</del>
                        <p className="price">${product.salePrice}.00</p>
                      </div>
                    </div>
                  </div>
                     ))}
                </div>
              </div>
            </div>
          
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sidebar;
