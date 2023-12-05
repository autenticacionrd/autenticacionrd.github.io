// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyTVl9C3zk-vJrHElu6cIKetgr8PDRMzU",
  authDomain: "ut50rnzd.firebaseapp.com",
  projectId: "ut50rnzd",
  storageBucket: "ut50rnzd.appspot.com",
  messagingSenderId: "661220333088",
  appId: "1:661220333088:web:63f2d5ccc5ba1821410e45",
  measurementId: "G-M1CN0JY9PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
