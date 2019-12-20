import {
  NEW_MESSAGE,
  SEND_MESSAGE,
  USER_LEFT,
  DISCONNECT,
  SERVER_DOWN
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_MESSAGE:
    case SEND_MESSAGE:
    case USER_LEFT:
      const updated = [...state];
      updated.push(payload);
      return updated;
    case DISCONNECT:
    case SERVER_DOWN:
      return [];
    default:
      return state;
  }
};
