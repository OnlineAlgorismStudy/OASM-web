import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYHjPAufAjSDR7b09_SfZxrFRN3IPIbX8",
  authDomain: "oasm-889a7.firebaseapp.com",
  databaseURL: "https://oasm-889a7.firebaseio.com",
  projectId: "oasm-889a7",
  storageBucket: "oasm-889a7.appspot.com",
  messagingSenderId: "187405855435",
  appId: "1:187405855435:web:318d1ae149f82e8743094e",
  measurementId: "G-659EFPREVS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
