import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTWfSnkr_a23YFeGb4ONmHlCFIikumY7k",
  authDomain: "club-ecommerce-313da.firebaseapp.com",
  projectId: "club-ecommerce-313da",
  storageBucket: "club-ecommerce-313da.appspot.com",
  messagingSenderId: "967700354438",
  appId: "1:967700354438:web:27ce6090a13d6a231a8807",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

