import { call, take, fork, all } from "redux-saga/effects";
import {
  FILE,
  FILE_MON,
  FILE_TUE,
  FILE_WED,
  FILE_THU,
  FILE_FRI,
  fileEntity,
  fileMonEntity,
  fileTueEntity,
  fileWedEntity,
  fileThuEntity,
  fileFriEntity,
} from "redux/modules/file";
import { fetchEntity } from "utils/saga";
import firebase from "utils/firebase";

const getFiles = async (data) =>
  await firebase
    .database()
    .ref("files")
    .once("value")
    .then((result) => ({
      data: Object.values(result.val()).filter((file) =>
        file.date.match(data.date)
      ),
    }));

const getFilesSaga = fetchEntity(fileEntity, getFiles);

const getMonFilesSaga = fetchEntity(fileMonEntity, getFiles);
const getTueFilesSaga = fetchEntity(fileTueEntity, getFiles);
const getWedFilesSaga = fetchEntity(fileWedEntity, getFiles);
const getThuFilesSaga = fetchEntity(fileThuEntity, getFiles);
const getFriFilesSaga = fetchEntity(fileFriEntity, getFiles);

function* watchGetFiles() {
  while (true) {
    const { payload } = yield take(FILE);
    yield call(getFilesSaga, payload);
  }
}

function* watchGetMonFiles() {
  while (true) {
    const { payload } = yield take(FILE_MON);
    yield call(getMonFilesSaga, payload);
  }
}

function* watchGetTueFiles() {
  while (true) {
    const { payload } = yield take(FILE_TUE);
    yield call(getTueFilesSaga, payload);
  }
}

function* watchGetWedFiles() {
  while (true) {
    const { payload } = yield take(FILE_WED);
    yield call(getWedFilesSaga, payload);
  }
}

function* watchGetThuFiles() {
  while (true) {
    const { payload } = yield take(FILE_THU);
    yield call(getThuFilesSaga, payload);
  }
}

function* watchGetFriFiles() {
  while (true) {
    const { payload } = yield take(FILE_FRI);
    yield call(getFriFilesSaga, payload);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetFiles),
    fork(watchGetMonFiles),
    fork(watchGetTueFiles),
    fork(watchGetWedFiles),
    fork(watchGetThuFiles),
    fork(watchGetFriFiles),
  ]);
}
