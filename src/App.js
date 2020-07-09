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
        const file = data.val()[key];
        if (file.date.match(moment().format("YYYY-MM-DD"))) {
          console.log(file);
        }
        // if (file.match(moment().format("MMDD"))) {
        //   console.log(file);
        // }
      });
    });
  }, []);

  return <div>Hello World</div>;
};
