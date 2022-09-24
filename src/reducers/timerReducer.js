import {
  SESSION_LENGTH_UP,
  SESSION_LENGTH_DOWN,
  BREAK_LENGTH_UP,
  BREAK_LENGTH_DOWN,
  REFRESH,
  START_TIMER,
  STOP_TIMER,
  TICK,
} from "../actions/types";

const INITIAL_STATE = {
  sessionLength: 25,
  breakLength: 5,
  isRunning: false,
  secondsRemaining: 25 * 60,
  interval: null,
  type: "session",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SESSION_LENGTH_UP:
      return state.sessionLength === 60
        ? state
        : {
            ...state,
            sessionLength: state.sessionLength + 1,
            secondsRemaining: (state.sessionLength + 1) * 60,
          };
    case SESSION_LENGTH_DOWN:
      return state.sessionLength === 1
        ? state
        : {
            ...state,
            sessionLength: state.sessionLength - 1,
            secondsRemaining: (state.sessionLength - 1) * 60,
          };
    case REFRESH:
      return INITIAL_STATE;
    case BREAK_LENGTH_UP:
      return state.breakLength === 60
        ? state
        : { ...state, breakLength: state.breakLength + 1 };
    case BREAK_LENGTH_DOWN:
      return state.breakLength === 1
        ? state
        : { ...state, breakLength: state.breakLength - 1 };

    case STOP_TIMER:
      return { ...state, isRunning: false };
    case START_TIMER:
      return {
        ...state,
        isRunning: true,
        interval: action.payload,
      };
    case TICK:
      console.log(state.secondsRemaining);
      return { ...state, secondsRemaining: state.secondsRemaining - 1 };

    default:
      return state;
  }
};
