import { SET_USER } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};
