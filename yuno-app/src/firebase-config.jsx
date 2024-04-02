// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain:  import.meta.env.VITE_DOMAIN,
  databaseURL:  import.meta.env.VITE_DATABASEURL,
  projectId:  import.meta.env.VITE_PROJECTID,
  storageBucket:  import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:  import.meta.env.VITE_MESSAGESENDERID,
  appId:  import.meta.env.VITE_APPID,
  measurementId:  import.meta.env.VITE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);