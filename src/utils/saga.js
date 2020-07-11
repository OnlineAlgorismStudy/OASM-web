import { put, call } from "redux-saga/effects";

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
