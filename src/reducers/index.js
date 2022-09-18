import { combineReducers } from "redux";
import sessionLengthReducer from "./sessionLengthReducer";

export default combineReducers({
  sessionLength: sessionLengthReducer,
});
