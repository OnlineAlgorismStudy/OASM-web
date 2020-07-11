import { call, take, fork, all } from "redux-saga/effects";
import { FILE, fileEntity } from "redux/modules/file";
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

function* watchGetFiles() {
  while (true) {
    const { payload } = yield take(FILE);
    yield call(getFilesSaga, payload);
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetFiles)]);
}
