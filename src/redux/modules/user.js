import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import {
  baseApiActionType,
  baseAsyncActionHandler,
  createEntity,
  init,
  SUCCESS,
} from "utils/redux";

const initialState = {
  users: init,
  user: init,
  origin: init,
};

export const USER = "user";
export const CREATE_USER = "create_user";
export const ORIGIN = "origin_user";

export const userAction = createAction(USER);
export const createUserAction = createAction(CREATE_USER);
export const originUserAction = createAction(ORIGIN);

export const userActions = baseApiActionType(userAction);
export const createUserActions = baseApiActionType(createUserAction);
export const originUserActions = baseApiActionType(originUserAction);

export const userEntity = createEntity(userActions);
export const createUserEntity = createEntity(createUserActions);
export const originUserEntity = createEntity(originUserActions);

export default handleActions(
  {
    ...baseAsyncActionHandler("users", userActions),
    ...baseAsyncActionHandler("user", createUserActions),
    ...baseAsyncActionHandler("origin", originUserActions),
    [createUserActions.success]: (state, action) => {
      return produce(state, (draft) => {
        draft["user"].status = SUCCESS;
      });
    },
  },
  initialState
);
