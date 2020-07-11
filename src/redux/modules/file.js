import { createAction, handleActions } from "redux-actions";
import {
  baseApiActionType,
  baseAsyncActionHandler,
  createEntity,
  init,
} from "utils/redux";

const initialState = {
  files: init,
  mon: init,
  tue: init,
  wed: init,
  thu: init,
  fri: init,
};

export const FILE = "file";

export const FILE_MON = "file_mon";
export const FILE_TUE = "file_tue";
export const FILE_WED = "file_wed";
export const FILE_THU = "file_thu";
export const FILE_FRI = "file_fri";

export const fileAction = createAction(FILE);
export const fileMonAction = createAction(FILE_MON);
export const fileTueAction = createAction(FILE_TUE);
export const fileWedAction = createAction(FILE_WED);
export const fileThuAction = createAction(FILE_THU);
export const fileFriAction = createAction(FILE_FRI);

export const fileActions = baseApiActionType(fileAction);
export const fileMonActions = baseApiActionType(fileMonAction);
export const fileTueActions = baseApiActionType(fileTueAction);
export const fileWedActions = baseApiActionType(fileWedAction);
export const fileThuActions = baseApiActionType(fileThuAction);
export const fileFriActions = baseApiActionType(fileFriAction);

export const fileEntity = createEntity(fileActions);
export const fileMonEntity = createEntity(fileMonActions);
export const fileTueEntity = createEntity(fileTueActions);
export const fileWedEntity = createEntity(fileWedActions);
export const fileThuEntity = createEntity(fileThuActions);
export const fileFriEntity = createEntity(fileFriActions);

export default handleActions(
  {
    ...baseAsyncActionHandler("files", fileActions),
    ...baseAsyncActionHandler("mon", fileMonActions),
    ...baseAsyncActionHandler("tue", fileTueActions),
    ...baseAsyncActionHandler("wed", fileWedActions),
    ...baseAsyncActionHandler("thu", fileThuActions),
    ...baseAsyncActionHandler("fri", fileFriActions),
  },
  initialState
);
