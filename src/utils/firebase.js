import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: "oasm-889a7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
