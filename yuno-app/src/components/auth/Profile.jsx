import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import NavBarMobile from '../layout/NavBarMobile';
import Header from '../layout/Header';
const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartTotalQuantity');
    navigate("/account");
  };
  return (
    <>
    <Header/>
      <div>Profile</div>
      <Link to="/changePass">
        <button>Change Pass</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
      <NavBarMobile/>
    </>
  );
};

export default Profile;
