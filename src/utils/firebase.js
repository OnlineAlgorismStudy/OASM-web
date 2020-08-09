import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = require("assets/oasm.json");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
