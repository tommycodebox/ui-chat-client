import { NEW_MESSAGE, SEND_MESSAGE } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_MESSAGE:
    case SEND_MESSAGE:
      const updated = [...state];
      updated.push(payload);
      return updated;
    default:
      return state;
  }
};
