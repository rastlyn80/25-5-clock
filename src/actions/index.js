import {
  SESSION_LENGTH_UP,
  SESSION_LENGTH_DOWN,
  BREAK_LENGTH_UP,
  BREAK_LENGTH_DOWN,
  REFRESH,
  START_TIMER,
  STOP_TIMER,
} from "./types";

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

export const incrementBreak = () => {
  return {
    type: BREAK_LENGTH_UP,
  };
};

export const decrementBreak = () => {
  return {
    type: BREAK_LENGTH_DOWN,
  };
};

export const startTimer = () => {
  return {
    type: START_TIMER,
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
  };
};

export const refresh = () => {
  return {
    type: REFRESH,
  };
};
