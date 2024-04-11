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
import { USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,GET_USER_SUCCESS} from "./constants";
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
    const getUser = () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        return  currentUser ;
      } else {
        console.log("có lỗi");
        return null;
      }
    };
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
          if (userCredential.user.accessToken) {
            const user = {
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              accessToken: userCredential.user.accessToken
            };
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userCredential });
            // const user = getUser();
            dispatch({ type: GET_USER_SUCCESS, payload: user });
          }
        } catch (error) {
          dispatch({ type: USER_LOGIN_FAIL });
        }
      };
  const productContextData = {
        userState,
        getUser,
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