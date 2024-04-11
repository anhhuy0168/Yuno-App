import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import NavBarMobile from "../layout/NavBarMobile";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    Login,
  } = useContext(AuthContext);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await Login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Đã xảy ra lỗi khi đăng nhập:", error);
    }
  };

  return (
    <>
    <div className="form-container sign-in-container">
      <form onSubmit={signIn} className="form-account">
        <h1 className="title">Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
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
        <a href="#">Forgot your password?</a>
        <button className="button-container">Sign In</button>
      </form>
    </div>   
      <NavBarMobile />
    </>
  );
};

export default Login;
