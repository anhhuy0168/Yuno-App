import React from "react";
import { auth } from "../../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Link } from "react-router-dom";
import { getUserFromLocalStorage } from "../localStorage";
import HeaderOutSide from "../layout/HeaderOutSide";
const ChangePass = () => {
  const user = getUserFromLocalStorage()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(auth, emalVal)
      .then((data) => {
        toast.success("Check Your Email!", {
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
      })
      .catch((err) => {
        toast.error("Error !!", {
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
      });
  };
  return (
    <>
    <HeaderOutSide/>
      <ToastContainer />
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{

          margin:"90px auto",
          maxWidth: "400px",
          textAlign: "center",
          backgroundColor: "#f2f2f2",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
      >
        <input
          required
          type="email"
          name="email"
          placeholder="Enter email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "0px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />
        <br />
        <br />
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Reset
        </button>
      <Link to={user ? "/profile" : "/login"}>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Back
        </button>
        </Link>
       
      </form>
    </>
  );
};

export default ChangePass;
