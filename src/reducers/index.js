import { combineReducers } from "redux";
import sessionLengthReducer from "./sessionLengthReducer";
import breakLengthReducer from "./breakLengthReducer";
import timerReducer from "./timerReducer";

export default combineReducers({
  sessionLength: sessionLengthReducer,
  breakLength: breakLengthReducer,
  timer: timerReducer,
});
