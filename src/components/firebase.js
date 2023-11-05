// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADexxYJr-b8GeGb-Oiuc4rx07gsO57uzM",
  authDomain: "loanlendz.firebaseapp.com",
  projectId: "loanlendz",
  storageBucket: "loanlendz.appspot.com",
  messagingSenderId: "891278119602",
  appId: "1:891278119602:web:3a789f8c0960a36293afab",
  measurementId: "G-HXYGFET6EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);