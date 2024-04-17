import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import NavBarMobile from "../layout/NavBarMobile";
import LoginGoogle from "./LoginGoogle";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { Login } = useContext(AuthContext);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      if(email||password) { 
        await Login(email, password);
        navigate("/");
      }
      else{
        alert("Đã xảy ra lỗi khi đăng nhập");

      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi đăng nhập:", error);
    }
  };
  
  const handleLoginSuccess = (userData) => {
    if(userData){
      setEmail(""); 
      setPassword("");
      navigate("/");
    }
    else{
      return null
    }
  };
  return (
    <>

      <div className="form-container sign-in-container">
        <form onSubmit={signIn} className="form-account">
          <h1 className="title">Sign in</h1>
          <div className="social-container">
            <a className="social">
            <LoginGoogle onClick={handleLoginSuccess} />
            </a>
          </div>
          <span>or use your account</span>
          <input
            className="user-input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="user-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/changePass"}>
          <a href="#">Forgot your password?</a>
          </Link>

          <button className="button-container">Sign In</button>
        </form>
      </div>
      <NavBarMobile />
    </>
  );
};

export default Login;
