import { all, fork } from "redux-saga/effects";
import {
  FILE,
  fileEntity,
  MONTHLY_FILE,
  monthlyFileEntity,
} from "redux/modules/file";
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

const getMonthlyFiles = async (month) => {
  const days = [...Array(31).keys()].map(
    (day) => `2020-${month}-${day + 1 < 10 ? "0" + parseInt(day + 1) : day + 1}`
  );

  const query = [];
  query.push(
    await firebase
      .firestore()
      .collection("date")
      .where("date", "in", days.splice(0, 10))
      .get()
  );
  query.push(
    await firebase
      .firestore()
      .collection("date")
      .where("date", "in", days.splice(0, 10))
      .get()
  );
  query.push(
    await firebase
      .firestore()
      .collection("date")
      .where("date", "in", days.splice(0, 10))
      .get()
  );
  query.push(
    await firebase
      .firestore()
      .collection("date")
      .where("date", "in", days.splice(0, 10))
      .get()
  );

  const data = query.map((date) => date.docs.map((doc) => doc.data())).flat();

  return { data: data };
};

const getFilesSaga = fetchEntity(fileEntity, getFiles);
const getMonthlyFilesSaga = fetchEntity(monthlyFileEntity, getMonthlyFiles);

export default function* rootSaga() {
  yield all([
    fork(watchSaga(FILE, getFilesSaga)),
    fork(watchSaga(MONTHLY_FILE, getMonthlyFilesSaga)),
  ]);
}
