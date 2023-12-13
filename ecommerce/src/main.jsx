import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDa8Bi-dWFCYkhjxejX9scD-RDTZ5y38Os",
  authDomain: "ecommerce-mkippes.firebaseapp.com",
  projectId: "ecommerce-mkippes",
  storageBucket: "ecommerce-mkippes.appspot.com",
  messagingSenderId: "590815817240",
  appId: "1:590815817240:web:0ef14be7d794c6b37d1d6d",
  measurementId: "G-2ETH2KNMPS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
