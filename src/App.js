import React from "react";
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/database";

export default () => {
  const database = firebase.database();

  database.ref("users").on("value", (dataSnapshow) => {
    console.log(dataSnapshow.val());
  });

  return <div>Hello World</div>;
};
