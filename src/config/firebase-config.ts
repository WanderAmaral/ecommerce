import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmGD6bJe6TBEfS31z5R_Yrm7U68Lzbhsc",
  authDomain: "e-commerce-amaral.firebaseapp.com",
  projectId: "e-commerce-amaral",
  storageBucket: "e-commerce-amaral.appspot.com",
  messagingSenderId: "78722035966",
  appId: "1:78722035966:web:7586a64953a3ebdb8075af"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

