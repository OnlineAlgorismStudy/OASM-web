import { call, take, fork, all } from "redux-saga/effects";
import { FILE, fileEntity, ORIGIN, originFileEntity } from "redux/modules/file";
import { fetchEntity } from "utils/saga";
import firebase from "utils/firebase";

const getFiles = async (data) =>
  await firebase
    .database()
    .ref(`files/${data.date}`)
    .once("value")
    .then((result) => ({
      data: Object.values(result.val()),
    }));

const getOriginFiles = async () =>
  await firebase
    .database()
    .ref("files")
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

const getFilesSaga = fetchEntity(fileEntity, getFiles);
const getOriginFilesSaga = fetchEntity(originFileEntity, getOriginFiles);

function* watchGetFiles() {
  while (true) {
    const { payload } = yield take(FILE);
    yield call(getFilesSaga, payload);
  }
}

function* watchGetOriginFiles() {
  while (true) {
    const { payload } = yield take(ORIGIN);
    yield call(getOriginFilesSaga, payload);
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetFiles), fork(watchGetOriginFiles)]);
}
