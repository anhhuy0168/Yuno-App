import React, { useState,useContext } from "react";
import Register from "./Register";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    userState: { user },
    Login,
  } = useContext(AuthContext);
  const signIn = (e) => {
    e.preventDefault();
    Login(email, password)
    if (user?.user?.accessToken) {
      navigate("/")
    }
  };
  return (
<>
<Register/>
<LoginGoogle/>
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
</>
  );
};

export default Login;
