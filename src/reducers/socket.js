import { SET_SOCKET, SERVER_DOWN } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SOCKET:
      return payload;
    case SERVER_DOWN:
      return null;
    default:
      return state;
  }
};
