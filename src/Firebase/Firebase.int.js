// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoTmNaa4_FtHv9M3t8sRUYm-r-KQajnJE",
  authDomain: "simple-firebase2-9cccd.firebaseapp.com",
  projectId: "simple-firebase2-9cccd",
  storageBucket: "simple-firebase2-9cccd.firebasestorage.app",
  messagingSenderId: "653916976788",
  appId: "1:653916976788:web:2f26ff1477f62936a2a681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
