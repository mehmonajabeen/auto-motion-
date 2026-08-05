// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnoWxj2LO1X7AaZabtbGftlqT-kr1X6VI",
  authDomain: "tiktok-auto-motion.firebaseapp.com",
  projectId: "tiktok-auto-motion",
  storageBucket: "tiktok-auto-motion.firebasestorage.app",
  messagingSenderId: "77827432843",
  appId: "1:77827432843:web:977cbae76ea8dfbe634f8e",
  measurementId: "G-T02JMEN4HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);