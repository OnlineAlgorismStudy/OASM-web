import { all } from "redux-saga/effects";

import userSaga from "saga/user";
import fileSaga from "saga/file";

export default function* rootSaga() {
  yield all([userSaga(), fileSaga()]);
}
