import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = require("assets/oasm.json");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
