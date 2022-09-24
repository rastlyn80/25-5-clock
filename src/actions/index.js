import {
  SESSION_LENGTH_UP,
  SESSION_LENGTH_DOWN,
  BREAK_LENGTH_UP,
  BREAK_LENGTH_DOWN,
  START_TIMER,
  STOP_TIMER,
  REFRESH,
  TICK,
  START_BREAK,
  START_SESSION,
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

export const refresh = () => {
  return {
    type: REFRESH,
  };
};

export const tick = () => {
  return {
    type: TICK,
  };
};

export const startBreak = () => {
  return {
    type: START_BREAK,
  };
};

export const startSession = () => {
  return {
    type: START_SESSION,
  };
};
