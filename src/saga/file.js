import { call, take, fork, all } from "redux-saga/effects";
import {
  FILE,
  fileEntity,
  ORIGIN,
  originFileEntity,
  // CREATE_FILE,
  // createFileEntity,
} from "redux/modules/file";
import { fetchEntity } from "utils/saga";
import firebase from "utils/firebase";
// import { moment } from "moment";

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
      });
      return {
        data: array,
      };
    });

// const createFile = async (data) => {
//   // 같은 키 값이라면 업데이트
//   await data.map((file) => {
//     firebase
//       .database()
//       .ref("files")
//       .child(file.date)
//       .child(file.key)
//       .set(
//         JSON.parse(
//           JSON.stringify({
//             date: file.date,
//             name: file.name,
//             extension: file.extension,
//             message: file.message,
//             upload: file.upload,
//             user: file.key,
//           })
//         )
//       );
//   });
// };

const getFilesSaga = fetchEntity(fileEntity, getFiles);
const getOriginFilesSaga = fetchEntity(originFileEntity, getOriginFiles);
// const createFilesSaga = fetchEntity(createFileEntity, createFile);

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

// function* watchCreateFiles() {
//   while (true) {
//     const { payload } = yield take(CREATE_FILE);
//     yield call(createFilesSaga, payload);
//   }
// }

export default function* rootSaga() {
  yield all([
    fork(watchGetFiles),
    fork(watchGetOriginFiles),
    //    fork(watchCreateFiles),
  ]);
}
