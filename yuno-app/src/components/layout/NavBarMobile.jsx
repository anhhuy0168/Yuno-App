import React from 'react'
import {
  FaShoppingBag,
  FaHome,
  FaRegUserCircle,
} from "react-icons/fa";
import { getCartTotalQuantity ,getUserFromLocalStorage} from '../localStorage';
import { Link } from "react-router-dom";
const NavBarMobile = () => {
  const cartTotalQuantity = getCartTotalQuantity();
  const user = getUserFromLocalStorage()
  return (
    <div className="mobile-bottom-navigation">
    <button className="action-btn">
      <Link to={"/productCart"}>
        <FaShoppingBag
          name="bag-handle-outline"
          style={{ color: "white" }}
        />
        <span className="count">{cartTotalQuantity}</span>
      </Link>
    </button>
    <button className="action-btn">
      <Link to={"/"}>
        <FaHome name="home-outline" style={{ color: "white" }} />
      </Link>
    </button>
    <button className="action-btn" data-mobile-menu-open-btn="">
    <Link to={"/account"}>
                    {user ? (
                      <Link to={"/profile"}>
                         <FaRegUserCircle
                        name="person-outline"
                        style={{ color: "white" }}
                      />
                      </Link>
                    ) : (
                      <FaRegUserCircle
                        name="person-outline"
                        style={{ color: "white" }}
                      />
                    )}
                  </Link>
    </button>
  </div>
  )
}

export default NavBarMobile