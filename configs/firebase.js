// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "y-automotive-35346.firebaseapp.com",
  projectId: "y-automotive-35346",
  storageBucket: "y-automotive-35346.appspot.com",
  messagingSenderId: "498645676280",
  appId: "1:498645676280:web:b7794a31535df37f5d4b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);