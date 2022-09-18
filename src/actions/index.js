import { SESSION_LENGTH_UP, SESSION_LENGTH_DOWN } from "./types";

export const incrementSession = () => {
  return {
    type: SESSION_LENGTH_UP,
  };
};

export const decrementSession = () => {
  return {
    type: SESSION_LENGTH_DOWN,
  };
};
