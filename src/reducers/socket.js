import { SET_SOCKET } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SOCKET:
      return payload;
    default:
      return state;
  }
};
