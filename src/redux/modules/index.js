import { combineReducers } from "redux";

import user from "redux/modules/user";
import file from "redux/modules/file";

export default combineReducers({ user, file });
