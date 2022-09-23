import { START_TIMER, STOP_TIMER } from "../actions/types";

const INITIAL_STATE = {
  isRunning: false,
  interval: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STOP_TIMER:
      return { isRunning: false };
    case START_TIMER:
      return { isRunning: true, interval: action.payload };
    default:
      return state;
  }
};
