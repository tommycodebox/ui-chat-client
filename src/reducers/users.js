import { SET_USERS, DISCONNECT, SERVER_DOWN, INACTIVE } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USERS:
      return payload;
    case DISCONNECT:
    case SERVER_DOWN:
    case INACTIVE:
      return [];
    default:
      return state;
  }
};
