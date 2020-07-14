import { call, take, fork, all } from "redux-saga/effects";
import {
  USER,
  userEntity,
  ORIGIN,
  originUserEntity,
  // CREATE_USER,
  // createUserEntity,
} from "redux/modules/user";
import { fetchEntity } from "utils/saga";
import firebase from "utils/firebase";

const getUsers = async () =>
  await firebase
    .database()
    .ref("users")
    .once("value")
    .then((result) => ({ data: Object.values(result.val()) }));

const getOriginUsers = async () =>
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
      });
      return {
        data: array,
      };
    });

// const createUser = async (data) => {
//   await data.map((user, index) => {
//     const key = Math.random().toString(36).substring(7).toUpperCase();
//     firebase
//       .database()
//       .ref("users")
//       .child(key + "_" + index)
//       .set(
//         JSON.parse(
//           JSON.stringify({
//             github: user.github,
//             name: user.name,
//             key: key,
//           })
//         )
//       );
//   });
// };

const getUsersSaga = fetchEntity(userEntity, getUsers);
const getOriginUsersSaga = fetchEntity(originUserEntity, getOriginUsers);
// const createUserSaga = fetchEntity(createUserEntity, createUser);

function* watchGetUsers() {
  while (true) {
    const { payload } = yield take(USER);
    yield call(getUsersSaga, payload);
  }
}

function* watchGetOriginUsers() {
  while (true) {
    const { payload } = yield take(ORIGIN);
    yield call(getOriginUsersSaga, payload);
  }
}

// function* watchCreateUser() {
//   while (true) {
//     const { payload } = yield take(CREATE_USER);
//     yield call(createUserSaga, payload);
//   }
// }

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchGetOriginUsers),
    //    fork(watchCreateUser),
  ]);
}
