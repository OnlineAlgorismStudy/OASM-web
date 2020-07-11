import produce from "immer";

export const ALREADY = "ALREADY";
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

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

export const baseApiActionType = (name) => {
  return {
    request: `${name}_REQUEST`,
    success: `${name}_SUCCESS`,
    failure: `${name}_FAILURE`,
  };
};

export const createEntity = (entity) => ({
  request: () => ({ type: entity.request }),
  success: (data) => ({ type: entity.success, payload: data }),
  failure: (error) => ({ type: entity.failure, error: error }),
});
