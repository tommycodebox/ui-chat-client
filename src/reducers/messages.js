import {
  NEW_MESSAGE,
  SEND_MESSAGE,
  USER_LEFT,
  DISCONNECT,
  SERVER_DOWN,
  INACTIVE,
  INACTIVE_USER
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_MESSAGE:
    case SEND_MESSAGE:
    case USER_LEFT:
    case INACTIVE_USER:
      const updated = [...state];
      updated.push(payload);
      return updated;
    case DISCONNECT:
    case SERVER_DOWN:
    case INACTIVE:
      return [];
    default:
      return state;
  }
};
