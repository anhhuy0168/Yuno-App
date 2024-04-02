import React from "react";

const Navbar = () => {
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
            <ion-icon name="search-outline" />
          </button>
        </div>
        <div className="header-user-actions">
          <button className="action-btn">
            <ion-icon name="person-outline" />
          </button>
          <button className="action-btn">
            <ion-icon name="heart-outline" />
            <span className="count">0</span>
          </button>
          <button className="action-btn">
            <ion-icon name="bag-handle-outline" />
            <span className="count">0</span>
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
    <div className="mobile-bottom-navigation">
      <button className="action-btn" data-mobile-menu-open-btn="">
        <ion-icon name="menu-outline" />
      </button>
      <button className="action-btn">
        <ion-icon name="bag-handle-outline" />
        <span className="count">0</span>
      </button>
      <button className="action-btn">
        <ion-icon name="home-outline" />
      </button>
      <button className="action-btn">
        <ion-icon name="heart-outline" />
        <span className="count">0</span>
      </button>
      <button className="action-btn" data-mobile-menu-open-btn="">
        <ion-icon name="grid-outline" />
      </button>
    </div>
    <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu="">
      <div className="menu-top">
        <h2 className="menu-title">Menu</h2>
        <button className="menu-close-btn" data-mobile-menu-close-btn="">
          <ion-icon name="close-outline" />
        </button>
      </div>
      <ul className="mobile-menu-category-list">
        <li className="menu-category">
          <a href="#" className="menu-title">
            Home
          </a>
        </li>
        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn="">
            <p className="menu-title">Men's</p>
            <div>
              <ion-icon name="add-outline" className="add-icon" />
              <ion-icon name="remove-outline" className="remove-icon" />
            </div>
          </button>
          <ul className="submenu-category-list" data-accordion="">
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Shirt
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Shorts &amp; Jeans
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Safety Shoes
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Wallet
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn="">
            <p className="menu-title">Women's</p>
            <div>
              <ion-icon name="add-outline" className="add-icon" />
              <ion-icon name="remove-outline" className="remove-icon" />
            </div>
          </button>
          <ul className="submenu-category-list" data-accordion="">
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Dress &amp; Frock
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Earrings
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Necklace
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Makeup Kit
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn="">
            <p className="menu-title">Jewelry</p>
            <div>
              <ion-icon name="add-outline" className="add-icon" />
              <ion-icon name="remove-outline" className="remove-icon" />
            </div>
          </button>
          <ul className="submenu-category-list" data-accordion="">
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Earrings
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Couple Rings
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Necklace
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Bracelets
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-category">
          <button className="accordion-menu" data-accordion-btn="">
            <p className="menu-title">Perfume</p>
            <div>
              <ion-icon name="add-outline" className="add-icon" />
              <ion-icon name="remove-outline" className="remove-icon" />
            </div>
          </button>
          <ul className="submenu-category-list" data-accordion="">
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Clothes Perfume
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Deodorant
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Flower Fragrance
              </a>
            </li>
            <li className="submenu-category">
              <a href="#" className="submenu-title">
                Air Freshener
              </a>
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
    </nav>
      </header>
    </main>
   
    </>
  );
};

export default Navbar;
