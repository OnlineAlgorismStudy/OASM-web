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
  files: init,
  file: init,
  origin: init,
};

export const FILE = "file";
export const CREATE_FILE = "create_file";
export const ORIGIN = "origin_file";

export const fileAction = createAction(FILE);
export const createFileAction = createAction(CREATE_FILE);
export const originFileAction = createAction(ORIGIN);

export const fileActions = baseApiActionType(fileAction);
export const creatFileActions = baseApiActionType(createFileAction);
export const originFileActions = baseApiActionType(originFileAction);

export const fileEntity = createEntity(fileActions);
export const createFileEntity = createEntity(creatFileActions);
export const originFileEntity = createEntity(originFileActions);

export default handleActions(
  {
    ...baseAsyncActionHandler("files", fileActions),
    ...baseAsyncActionHandler("file", creatFileActions),
    ...baseAsyncActionHandler("origin", originFileActions),
    [creatFileActions.success]: (state, action) => {
      return produce(state, (draft) => {
        draft["file"].status = SUCCESS;
      });
    },
  },
  initialState
);
