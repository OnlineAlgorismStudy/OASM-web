import { all, fork } from "redux-saga/effects";
import { USER, userEntity } from "redux/modules/user";
import { fetchEntity, watchSaga } from "utils/saga";
import firebase from "utils/firebase";

const getUsers = () => {};

const getUsersSaga = fetchEntity(userEntity, getUsers);

export default function* rootSaga() {
  yield all([fork(watchSaga(USER, getUsersSaga))]);
}
