import { START_TIMER, STOP_TIMER } from "../actions/types";

const INITIAL_STATE = {
  value: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STOP_TIMER:
      return { value: false };
    case START_TIMER:
      return { value: true };
    default:
      return state;
  }
};
