// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkDdgYGck2M8_0dmhyULeMZMbGdGpNeKE",
  authDomain: "mern-bookstore-9a31b.firebaseapp.com",
  projectId: "mern-bookstore-9a31b",
  storageBucket: "mern-bookstore-9a31b.appspot.com",
  messagingSenderId: "157456821683",
  appId: "1:157456821683:web:5ab52597438db0c2caafc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;