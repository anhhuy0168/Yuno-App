import { createContext, useReducer, useState } from "react";
import '../../firebase-config'; 
import {authReducer} from'../reducers/authReducer'
import { USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,GET_USER_SUCCESS} from "./constants";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase-config";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { getUserFromLocalStorage } from "../localStorage";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    // State
    const [userState, dispatch] = useReducer(authReducer, {
      user: [],
      userLoading: true,
      listUser: [],
    });
    const dataUser = getUserFromLocalStorage()
    const [users, setUsers] = useState([]);
    const getUser = async () => {
      const usersCollectionRef = collection(db, "users");
      const data = await getDocs(usersCollectionRef);
      const dataProducts =  data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      const productIds = dataProducts.filter((user) => user.uid === dataUser.uid);
      localStorage.setItem("informationUser", JSON.stringify(productIds[0]));
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
            };
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({ type: USER_LOGIN_SUCCESS, payload: userCredential });
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