import { createAction, handleActions } from "redux-actions";
import {
  baseApiActionType,
  baseAsyncActionHandler,
  createEntity,
  init,
} from "utils/redux";

const initialState = {
  files: init,
};

export const FILE = "file";

export const fileAction = createAction(FILE);

export const fileActions = baseApiActionType(fileAction);

export const fileEntity = createEntity(fileActions);

export default handleActions(
  {
    ...baseAsyncActionHandler("files", fileActions),
  },
  initialState
);
