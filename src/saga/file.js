import { all, fork } from "redux-saga/effects";
import { FILE, fileEntity, ORIGIN, originFileEntity } from "redux/modules/file";
import { fetchEntity, watchSaga } from "utils/saga";
import database from "utils/firebase";

const getFiles = async (data) => {
  let citiesRef = database
    .collection("date")
    .doc("2020-07-28")
    .collection("users");

  let users = [];
  let allCities = citiesRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        users.push(doc.id);
      });
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
};
const getOriginFiles = () => {};

const getFilesSaga = fetchEntity(fileEntity, getFiles);
const getOriginFilesSaga = fetchEntity(originFileEntity, getOriginFiles);

export default function* rootSaga() {
  yield all([
    fork(watchSaga(FILE, getFilesSaga)),
    fork(watchSaga(ORIGIN, getOriginFilesSaga)),
  ]);
}
