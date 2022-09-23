import {
  SESSION_LENGTH_UP,
  SESSION_LENGTH_DOWN,
  SESSION_LENGTH_REFRESH,
} from "../actions/types";

const INITIAL_STATE = {
  value: 25,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SESSION_LENGTH_UP:
      return state.value === 60 ? state : { value: state.value + 1 };
    case SESSION_LENGTH_DOWN:
      return state.value === 1 ? state : { value: state.value - 1 };
    case SESSION_LENGTH_REFRESH:
      return INITIAL_STATE;
    default:
      return state;
  }
};
