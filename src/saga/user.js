import { call, take, fork, all } from "redux-saga/effects";
import { USER, userEntity } from "redux/modules/user";
import { fetchEntity } from "utils/saga";
import firebase from "utils/firebase";

const getUsers = async () =>
  await firebase
    .database()
    .ref("users")
    .once("value")
    .then((result) => {
      const array = [];
      Object.keys(result.val()).map((key) => {
        array.push({
          key: key,
          value: result.val()[key],
        });
        return [];
      });
      return {
        data: array,
      };
    });

const getUsersSaga = fetchEntity(userEntity, getUsers);

function* watchGetUsers() {
  while (true) {
    const { payload } = yield take(USER);
    yield call(getUsersSaga, payload);
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetUsers)]);
}
