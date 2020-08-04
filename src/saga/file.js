import { all, fork } from "redux-saga/effects";
import { FILE, fileEntity, ORIGIN, originFileEntity } from "redux/modules/file";
import { fetchEntity, watchSaga } from "utils/saga";
import database from "utils/firebase";

const getFiles = async (data) => {
  await database
    .collection(data.date)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
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
