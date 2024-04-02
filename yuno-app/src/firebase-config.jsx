// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
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
const analytics = getAnalytics(app);
export const db = getFirestore(app);