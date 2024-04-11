import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Register } = useContext(AuthContext);
  const signUp = (e) => {
    e.preventDefault();
    Register(email, password);
  };

  return (
    <>
      <div className="form-container sign-up-container">
        <form onSubmit={signUp} className="form-account">
          <h1 className="title">Create Account</h1>
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
          <span>or use your email for registration</span>
          {/* <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        /> */}
          <input
          className="user-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
                    className="user-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="button-container">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Register;
