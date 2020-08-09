import { all, fork } from "redux-saga/effects";
import { USER, userEntity } from "redux/modules/user";
import { fetchEntity, watchSaga } from "utils/saga";
import firebase from "utils/firebase";

const getUsers = async () => {
  const users = [];
  await firebase
    .firestore()
    .collection("users")
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) =>
        users.push({
          name: doc.data().name,
          github: doc.id,
          state: doc.data().state,
        })
      );
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
  return { data: users };
};

const getUsersSaga = fetchEntity(userEntity, getUsers);

export default function* rootSaga() {
  yield all([fork(watchSaga(USER, getUsersSaga))]);
}
