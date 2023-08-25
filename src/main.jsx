import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf81WIKK1Qy0W0a1FqkL98VShrGcDgjZ0",
  authDomain: "futbol22-95cb9.firebaseapp.com",
  projectId: "futbol22-95cb9",
  storageBucket: "futbol22-95cb9.appspot.com",
  messagingSenderId: "250218733457",
  appId: "1:250218733457:web:6e1bc709f92e7c76f48430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

ReactDOM.createRoot(document.getElementById('root')).render(
            <App />
)

