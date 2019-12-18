import { JOIN_CHAT } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case JOIN_CHAT:
      return payload;
    default:
      return state;
  }
};
