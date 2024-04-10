import React from "react";
import {
  FaShoppingBag,
  FaSearch,
  FaHome,
  FaRegUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import Testimonials from "../Products/Testimonials";
import Blog from "./Blog";
import Footer from "./Footer";
import { CiGrid41 } from "react-icons/ci";
import "../../Style/Homepage.scss";
import useUserFromLocalStorage from "../../hook/useUserFromLocalStorage";
import NavBarMobie from "./NavBarMobile";
const Navbar = () => {
  const User = useUserFromLocalStorage();
  return (
    <>
      <main>
        <div className="notification-toast" data-toast="">
          <button className="toast-close-btn" data-toast-close="">
            <ion-icon name="close-outline" />
          </button>
          <div className="toast-banner">
            <img
              src="../src/assets/images/products/jewellery-1.jpg"
              alt="Rose Gold Earrings"
              width={80}
              height={70}
            />
          </div>
          <div className="toast-detail">
            <p className="toast-message">Someone in new just bought</p>
            <p className="toast-title">Rose Gold Earrings</p>
            <p className="toast-meta">
              <time dateTime="PT2M">2 Minutes</time> ago
            </p>
          </div>
        </div>
        <header>
          <div className="header-main">
            <div className="container">
              <a href="#" className="header-logo">
                <img
                  src="../src/assets/images/logo/logo.svg"
                  alt="Anon's logo"
                  width={120}
                  height={36}
                />
              </a>
              <div className="header-search-container">
                <input
                  type="search"
                  name="search"
                  className="search-field"
                  placeholder="Enter your product name..."
                />
                <button className="search-btn">
                  <FaSearch name="search-outline" />
                </button>
              </div>
              <div className="header-user-actions">
                <button className="action-btn">
                  <Link to={"/login"}>
                    {User ? (
                      <Link to={"/profile"}>
                        <span>{User.email}</span>
                      </Link>
                    ) : (
                      <FaRegUserCircle
                        name="person-outline"
                        style={{ color: "white" }}
                      />
                    )}
                  </Link>
                </button>
                <button className="action-btn">
                  <Link to={User ? "/productCart" : "/login"}>
                    <FaShoppingBag
                      name="bag-handle-outline"
                      style={{ color: "white" }}
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <nav className="desktop-navigation-menu">
            <div className="container">
              <ul className="desktop-menu-category-list">
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Home
                  </a>
                </li>
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Categories
                  </a>
                  <div className="dropdown-panel">
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Electronics</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Desktop</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Laptop</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Camera</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Tablet</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Headphone</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="../src/assets/images/electronics-banner-1.jpg"
                            alt="headphone collection"
                            width={250}
                            height={119}
                          />
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Men's</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Formal</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Casual</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Sports</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Jacket</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Sunglasses</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="../src/assets/images/mens-banner.jpg"
                            alt="men's fashion"
                            width={250}
                            height={119}
                          />
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Women's</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Formal</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Casual</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Perfume</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Cosmetics</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Bags</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="../src/assets/images/womens-banner.jpg"
                            alt="women's fashion"
                            width={250}
                            height={119}
                          />
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Electronics</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Smart Watch</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Smart TV</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Keyboard</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Mouse</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Microphone</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="../src/assets/images/electronics-banner-2.jpg"
                            alt="mouse collection"
                            width={250}
                            height={119}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Men's
                  </a>
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#">Shirt</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Shorts &amp; Jeans</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Safety Shoes</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Wallet</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Women's
                  </a>
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#">Dress &amp; Frock</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Earrings</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Necklace</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Makeup Kit</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Jewelry
                  </a>
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#">Earrings</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Couple Rings</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Necklace</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Bracelets</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Perfume
                  </a>
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#">Clothes Perfume</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Deodorant</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Flower Fragrance</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Air Freshener</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Blog
                  </a>
                </li>
                <li className="menu-category">
                  <a href="#" className="menu-title">
                    Hot Offers
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* <div className="mobile-bottom-navigation">
            <button className="action-btn">
              <Link to={"/productCart"}>
                <FaShoppingBag
                  name="bag-handle-outline"
                  style={{ color: "white" }}
                />
                <span className="count">0</span>
              </Link>
            </button>
            <button className="action-btn">
              <Link to={"/"}>
                <FaHome name="home-outline" style={{ color: "white" }} />
              </Link>
            </button>
            <button className="action-btn" data-mobile-menu-open-btn="">
              <Link to={"/login"}>
                <FaRegUserCircle
                  name="person-outline"
                  style={{ color: "white" }}
                />
              </Link>
            </button>
          </div> */}
          <NavBarMobie/>
        </header>
      </main>
      <Banner />
      <Sidebar />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default Navbar;
