import { BREAK_LENGTH_UP, BREAK_LENGTH_DOWN } from "../actions/types";

const INITIAL_STATE = {
  value: 5,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BREAK_LENGTH_UP:
      return { value: state.value + 1 };
    case BREAK_LENGTH_DOWN:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
