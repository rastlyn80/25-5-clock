import { combineReducers } from "redux";
import sessionLengthReducer from "./sessionLengthReducer";
import breakLengthReducer from "./breakLengthReducer";
import startStopReducer from "./startStopReducer";

export default combineReducers({
  sessionLength: sessionLengthReducer,
  breakLength: breakLengthReducer,
  isRunning: startStopReducer,
});
