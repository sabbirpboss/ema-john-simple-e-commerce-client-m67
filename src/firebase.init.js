// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuiPi3Sk_oziSQJ7UghJLvC4iDYS4vqss",
  authDomain: "ema-john-simple-e-commer-54a8e.firebaseapp.com",
  projectId: "ema-john-simple-e-commer-54a8e",
  storageBucket: "ema-john-simple-e-commer-54a8e.appspot.com",
  messagingSenderId: "76891320522",
  appId: "1:76891320522:web:2d681d0f59621d1ff70433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;