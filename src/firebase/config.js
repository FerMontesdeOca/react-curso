// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4RYfLb9Q0lvg2h5RyyJtgEdyrx3Es9nM",
  authDomain: "cursoreact-73bf1.firebaseapp.com",
  projectId: "cursoreact-73bf1",
  storageBucket: "cursoreact-73bf1.appspot.com",
  messagingSenderId: "67890098880",
  appId: "1:67890098880:web:819174f398d56114017325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();