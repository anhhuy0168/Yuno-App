import { createContext, useReducer, useState } from "react";
import '../../firebase-config'; 
import {authReducer} from'../reducers/authReducer'
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
import { USER_LOGIN_SUCCESS,USER_LOGIN_FAIL} from "./constants";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase-config";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    // State
    const [userState, dispatch] = useReducer(authReducer, {
      user: [],
      userLoading: true,
      listUser: [],
    });
    const Register = async (email,password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            if (userCredential.user.accessToken) {
                alert("dang ki thanh cong")
              }
              else{
                alert("error");
              }
        } catch (error) {
          alert(error);
        }
      };
      const Login = async (email,password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          if (userCredential.user.accessToken) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userCredential });
          }
        } catch (error) {
          dispatch({ type: USER_LOGIN_FAIL });
        }
      };
  const productContextData = {
        userState,
        Login,
        Register
    };
  
  
    return (
      <AuthContext.Provider value={productContextData}>
        {children}
      </AuthContext.Provider>
    );
  };
  export default AuthContextProvider;