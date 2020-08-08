import { all, fork } from "redux-saga/effects";
import { FILE, fileEntity } from "redux/modules/file";
import { fetchEntity, watchSaga } from "utils/saga";
import firebase from "utils/firebase";

const getFiles = async (data) => {
  const users = [];
  await firebase
    .firestore()
    .collection("date")
    .doc(data.date)
    .collection("users")
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) =>
        users.push({
          name: doc.id,
          files: doc.data().files,
        })
      );
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
  return { data: users };
};

const getFilesSaga = fetchEntity(fileEntity, getFiles);

export default function* rootSaga() {
  yield all([fork(watchSaga(FILE, getFilesSaga))]);
}
