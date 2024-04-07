// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain:  import.meta.env.VITE_DOMAIN,
  // databaseURL:  import.meta.env.VITE_DATABASEURL,
  // projectId:  import.meta.env.VITE_PROJECTID,
  // storageBucket:  import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:  import.meta.env.VITE_MESSAGESENDERID,
  // appId:  import.meta.env.VITE_APPID,
  // measurementId:  import.meta.env.VITE_MEASUREMENTID
  apiKey: "AIzaSyCZFXqFqmr6g3r1TvLEFj_lycidDO9TNno",
  authDomain: "yuno-app.firebaseapp.com",
  databaseURL: "https://yuno-app-default-rtdb.firebaseio.com",
  projectId: "yuno-app",
  storageBucket: "yuno-app.appspot.com",
  messagingSenderId: "823180913935",
  appId: "1:823180913935:web:a45e1f525e7ce439a2227a",
  measurementId: "G-9JJN3H35GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();