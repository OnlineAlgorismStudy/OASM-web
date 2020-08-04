import produce from "immer";
import { createAction } from "redux-actions";

export const ALREADY = "ALREADY";
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const DELETED = "DELETED";

export const init = {
  status: ALREADY,
  data: [],
  error: "",
};

export const baseAsyncActionHandler = (name, actionTypes) => {
  return {
    [actionTypes.request]: (state) => {
      return produce(state, (draft) => {
        draft[name].status = REQUEST;
        draft[name].data = [];
        draft[name].error = "";
      });
    },
    [actionTypes.success]: (state, action) => {
      return produce(state, (draft) => {
        draft[name].status = SUCCESS;
        draft[name].data = action.payload.data;
      });
    },
    [actionTypes.failure]: (state, action) => {
      return produce(state, (draft) => {
        draft[name].status = FAILURE;
        draft[name].error = action.error.response;
      });
    },
  };
};

const pluralize = require("pluralize");
export const restAsyncActionHandler = (name, actionTypes) => {
  const names = pluralize(name);
  return {
    ...baseAsyncActionHandler(names, actionTypes.index),
    ...baseAsyncActionHandler(name, actionTypes.show),
    ...baseAsyncActionHandler(name, actionTypes.create),
    ...baseAsyncActionHandler(name, actionTypes.update),
    ...baseAsyncActionHandler(name, actionTypes.delete),
  };
};

export const baseActionType = (name) => {
  return {
    already: `${name}s/already`,
    index: `${name}s/index`,
    create: `${name}s/create`,
    show: `${name}s/show`,
    update: `${name}s/update`,
    delete: `${name}s/delete`,
    index_params: `${name}s/index_params`,
  };
};

export const baseAction = (actionType) => {
  return {
    already: createAction(actionType.already),
    index: createAction(actionType.index),
    create: createAction(actionType.create),
    show: createAction(actionType.show),
    update: createAction(actionType.update),
    delete: createAction(actionType.delete),
    index_params: createAction(actionType.index_params),
  };
};

export const baseApiActionType = (name) => {
  return {
    request: `${name}_REQUEST`,
    success: `${name}_SUCCESS`,
    failure: `${name}_FAILURE`,
  };
};

export const restApiActionType = (name) => {
  return {
    index: baseApiActionType(name.index),
    show: baseApiActionType(name.show),
    create: baseApiActionType(name.create),
    update: baseApiActionType(name.update),
    delete: baseApiActionType(name.delete),
  };
};

export const createEntity = (entity) => ({
  request: () => ({ type: entity.request }),
  success: (data) => ({ type: entity.success, payload: data }),
  failure: (error) => ({ type: entity.failure, error: error }),
});

export const createEntities = (entity) => ({
  index: createEntity(entity.index),
  show: createEntity(entity.show),
  create: createEntity(entity.create),
  update: createEntity(entity.update),
  delete: createEntity(entity.delete),
});
