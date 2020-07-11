import { createAction, handleActions } from "redux-actions";
import {
  baseApiActionType,
  baseAsyncActionHandler,
  createEntity,
  init,
} from "utils/redux";

const initialState = {
  users: init,
};

export const USER = "user";
export const userAction = createAction(USER);
export const userActions = baseApiActionType(userAction);
export const userEntity = createEntity(userActions);

export default handleActions(
  {
    ...baseAsyncActionHandler("users", userActions),
  },
  initialState
);
