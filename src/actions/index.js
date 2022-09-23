import {
  SESSION_LENGTH_UP,
  SESSION_LENGTH_DOWN,
  BREAK_LENGTH_UP,
  BREAK_LENGTH_DOWN,
  START_TIMER,
  STOP_TIMER,
  SESSION_LENGTH_REFRESH,
  BREAK_LENGTH_REFRESH,
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

export const startTimer = (payload) => {
  return {
    type: START_TIMER,
    payload: payload,
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
  };
};

export const sessionRefresh = () => {
  return {
    type: SESSION_LENGTH_REFRESH,
  };
};

export const breakRefresh = () => {
  return {
    type: BREAK_LENGTH_REFRESH,
  };
};
