import { put, call, take } from "redux-saga/effects";

export const fetchEntity = (entity, apiFn) =>
  function* (...params) {
    yield put(entity.request());
    try {
      const data = yield call(apiFn, ...params);
      yield put(entity.success(data));
    } catch (error) {
      console.log(error);
      yield put(entity.failure(error));
    }
  };

export const watchSaga = (action, saga) =>
  function* () {
    while (true) {
      const { payload } = yield take(action);
      yield call(saga, payload);
    }
  };
