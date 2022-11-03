import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { generalReducer } from "./general";

export const reducers = combineReducers({
  auth: authReducer,
  general: generalReducer,
});
