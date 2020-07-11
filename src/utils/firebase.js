import * as firebase from "firebase/app";
import "firebase/database";

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

export default firebase;
