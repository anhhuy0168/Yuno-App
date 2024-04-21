import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import NavBarMobile from "../layout/NavBarMobile";
import LoginGoogle from "./LoginGoogle";
import { Link } from "react-router-dom";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserFromLocalStorage } from "../localStorage";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { Login} = useContext(AuthContext);
const user = getUserFromLocalStorage()
  const signIn = async (e) => {
    e.preventDefault();
    try {
      if(email||password) { 
        await Login(email, password);
        if(!user||user?.uid== null){
          toast.error('Incorect Email or Password !!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
         
        }
        else{
          toast.success('Login Success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
          setTimeout(async () => {
            navigate("/");
         }, 2000); 
        }
      }
      else{
        alert("Đã xảy ra lỗi khi đăng nhập");
        
      }
    } catch (error) {
    
      console.error("Đã xảy ra lỗi khi đăng nhập:", error);
      
    }
  };
  console.log(user);
  const handleLoginSuccess = (userData) => {
    if(userData){
      setEmail(""); 
      setPassword("");
        setTimeout(async () => {
           navigate("/");
        }, 2000); 
    }
    
    else{
      return null
    }
  };
  return (
    <>
 
      <div className="form-container sign-in-container">
      <ToastContainer />
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
