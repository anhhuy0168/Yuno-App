import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import styled from "styled-components";
import HeaderOutSide from "../layout/HeaderOutSide"
import { ToastContainer, toast,Bounce } from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { Register } = useContext(AuthContext);
  const navigate = useNavigate()
  const signUp = async (e) => {
    e.preventDefault();
    try {
      if (confirmPassword === password) {
        await Register(email, password);
       }
    } catch (error) {
      if(error.message==="Register successfully"){
        toast.success('Register successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
          setTimeout(async () => {
            navigate("/login");
          }, 2000);
      }
      else{
        toast.error("Email Already in Use ", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      }
    }
  
  };

  return (
    <>
      <HeaderOutSide />
      <ToastContainer/>
      <Wrapper style={{marginTop:"-9%"}}>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <img
          className="wave"
          src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1713715988/wave_lphsxx.png"
        />
        <div className="container">
          <div className="img">
            <img src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1713715986/bg_bb4v0x.svg" />
          </div>
          <div className="login-content">
            <form onSubmit={signUp}>
              <img
                src="https://res.cloudinary.com/da3bmd8ak/image/upload/v1713715985/avatar_ltutqu.svg"
                style={{ margin: "auto" }}
              />
              <h2 className="title">Register</h2>
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
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
             
              <button className="btn">Sign Up</button>
              <Link to="/login" style={{textAlign:"center"}}>
             Have account ? Sign In
              </Link>
            </form>
            
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Register;
