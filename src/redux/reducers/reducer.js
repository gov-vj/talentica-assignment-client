import { combineReducers } from "redux";
import registration from "./registration";
import login from "./login";
import user from "./user";
import isAuthenticated from "./isAuthenticated";

export default combineReducers({
  registration,
  user,
  login,
  isAuthenticated,
});
