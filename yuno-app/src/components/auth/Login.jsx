import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import NavBarMobile from "../layout/NavBarMobile";
import LoginGoogle from "./LoginGoogle";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInformationUser } from "../localStorage";
import styled from "styled-components";
import HeaderOutSide from "../layout/HeaderOutSide";
const Wrapper = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    overflow: hidden;
  }

  .wave {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;
  }

  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .login-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  .img img {
    width: 500px;
  }

  form {
    width: 360px;
  }

  .login-content img {
    height: 100px;
  }

  .login-content h2 {
    margin: 15px 0;
    color: #333;
    text-transform: uppercase;
    font-size: 2.9rem;
  }

  .login-content .input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
  }

  .login-content .input-div.one {
    margin-top: 0;
  }

  .i {
    color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .i i {
    transition: 0.3s;
  }

  .input-div > div {
    position: relative;
    height: 45px;
  }

  .input-div > div > h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: 0.3s;
  }

  .input-div:before,
  .input-div:after {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #38d39f;
    transition: 0.4s;
  }

  .input-div:before {
    right: 50%;
  }

  .input-div:after {
    left: 50%;
  }

  .input-div.focus:before,
  .input-div.focus:after {
    width: 50%;
  }

  .input-div.focus > div > h5 {
    top: -5px;
    font-size: 15px;
  }

  .input-div.focus > .i > i {
    color: #38d39f;
  }

  .input-div > div > input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    color: #555;
    font-family: "poppins", sans-serif;
  }

  .input-div.pass {
    margin-bottom: 4px;
  }

  a {
    display: block;
    text-align: right;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: 0.3s;
  }

  a:hover {
    color: #38d39f;
  }

  .btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    background-size: 200%;
    font-size: 1.2rem;
    color: #fff;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    margin: 1rem 0;
    cursor: pointer;
    transition: 0.5s;
  }
  .btn:hover {
    background-position: right;
  }

  @media screen and (max-width: 1050px) {
    .container {
      grid-gap: 5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    form {
      width: 290px;
    }

    .login-content h2 {
      font-size: 2.4rem;
      margin: 8px 0;
    }

    .img img {
      width: 400px;
    }
  }

  @media screen and (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
    }

    .img {
      display: none;
    }

    .wave {
      display: none;
    }

    .login-content {
      justify-content: center;
    }
  }
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const { Login } = useContext(AuthContext);
  const signIn = async (e) => {
    e.preventDefault();
    try {
      await Login(email, password);
      const user = getInformationUser();
      if (user != null) {
        setIsLoginSuccess(true); // Đặt trạng thái đăng nhập thành công là true
      }
             
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.error("Incorrect email or password!");
        return null
      } else if (error.code === "auth/user-not-found") {
        toast.error("Account not found!");
        return null
      } else {
        toast.error("An error occurred while logging!");
        return null
      }
    }
  };
  const handleLoginSuccess = (userData) => {
    if (userData) {
      setEmail("");
      setPassword("");
      setTimeout(async () => {
        navigate("/");
      }, 2000);
    } else {
      return null;
    }
  };
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleEmailFocus = () => {
    const parent = emailInputRef.current.parentNode.parentNode;
    parent.classList.add("focus");
  };

  const handleEmailBlur = () => {
    const parent = emailInputRef.current.parentNode.parentNode;
    if (emailInputRef.current.value === "") {
      parent.classList.remove("focus");
    }
  };

  const handlePasswordFocus = () => {
    const parent = passwordInputRef.current.parentNode.parentNode;
    parent.classList.add("focus");
  };

  const handlePasswordBlur = () => {
    const parent = passwordInputRef.current.parentNode.parentNode;
    if (passwordInputRef.current.value === "") {
      parent.classList.remove("focus");
    }
  };
  useEffect(() => {
    if (isLoginSuccess) {
      navigate("/"); // Điều hướng sau khi đăng nhập thành công
    }
  }, [isLoginSuccess, navigate]);
  return (
    <>
      <ToastContainer />
      <HeaderOutSide />
      <Wrapper style={{ marginTop: "-9%" }}>
        <img
          className="wave"
          src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1713715988/wave_lphsxx.png"
        />
        <div className="container">
          <div className="img">
            <img src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1713715986/bg_bb4v0x.svg" />
          </div>
          <div className="login-content">
            <form onSubmit={signIn}>
              <img
                src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1713715985/avatar_ltutqu.svg"
                style={{ margin: "auto" }}
              />

              <h2 className="title">Login</h2>

              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailInputRef}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    required
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordInputRef}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    required
                  />
                </div>
              </div>
              <LoginGoogle onClick={handleLoginSuccess} />
              <Link to="/register">
                <a style={{ textAlign: "center" }} href="#">
                  Register?
                </a>
              </Link>
              <Link to="/changePass">
                <a style={{ textAlign: "center" }} href="#">
                  Forgot Password?
                </a>
              </Link>
              <button className="btn">Sign In</button>
            </form>
          </div>
        </div>
      </Wrapper>
      <NavBarMobile />
    </>
  );
};

export default Login;
