import React, { useState, useEffect } from "react";
import moment from "moment";
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/database";

export default () => {
  const [users, setUsers] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const database = firebase.database();

    database.ref("users").once("value", (data) => {
      const result = Object.keys(data.val()).forEach((key, index) => {
        setUsers(users.concat(data.val()[key]));
      });
    });

    database.ref("files").on("value", (data) => {
      Object.keys(data.val()).forEach((key) => {
        if (key.match(moment().format("MMDD"))) {
          console.log(data.val()[key]);
        }
      });
    });
  }, []);

  return <div>Hello World</div>;
};
