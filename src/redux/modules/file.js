import { createAction, handleActions } from "redux-actions";
import {
  baseApiActionType,
  baseAsyncActionHandler,
  createEntity,
  init,
} from "utils/redux";

const initialState = {
  files: init,
  monthlyFiles: init,
};

export const FILE = "file";
export const MONTHLY_FILE = "monthly_file";

export const fileAction = createAction(FILE);
export const monthlyFileAction = createAction(MONTHLY_FILE);

export const fileActions = baseApiActionType(fileAction);
export const monthlyFileActions = baseApiActionType(monthlyFileAction);

export const fileEntity = createEntity(fileActions);
export const monthlyFileEntity = createEntity(monthlyFileActions);

export default handleActions(
  {
    ...baseAsyncActionHandler("files", fileActions),
    ...baseAsyncActionHandler("monthlyFiles", monthlyFileActions),
  },
  initialState
);
