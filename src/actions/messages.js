import { NEW_MESSAGE, SEND_MESSAGE } from './types';

// Receive a new message
export const newMessage = msg => dispatch => {
  dispatch({
    type: NEW_MESSAGE,
    payload: msg
  });
};

// Send a message
export const sendMessage = (text, user, socket) => dispatch => {
  const message = {
    text,
    user
  };

  socket.emit('new-message', message);

  dispatch({
    type: SEND_MESSAGE,
    payload: message
  });
};
