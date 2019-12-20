import { SET_USER, DISCONNECT, SERVER_DOWN, INACTIVE } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return payload;
    case DISCONNECT:
    case SERVER_DOWN:
    case INACTIVE:
      return null;
    default:
      return state;
  }
};
