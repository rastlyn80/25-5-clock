import {
  BREAK_LENGTH_UP,
  BREAK_LENGTH_DOWN,
  BREAK_LENGTH_REFRESH,
} from "../actions/types";

const INITIAL_STATE = {
  value: 5,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BREAK_LENGTH_UP:
      return state.value === 60 ? state : { value: state.value + 1 };
    case BREAK_LENGTH_DOWN:
      return state.value === 1 ? state : { value: state.value - 1 };
    case BREAK_LENGTH_REFRESH:
      return INITIAL_STATE;
    default:
      return state;
  }
};
