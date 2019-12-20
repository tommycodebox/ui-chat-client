import {
  SET_USER,
  USER_LEFT,
  DISCONNECT,
  INACTIVE,
  INACTIVE_USER
} from './types';
import toast from '../utils/toast';

// Join chat
export const joinChat = (socket, username) => dispatch => {
  const user = {
    id: socket.id,
    username
  };

  socket.emit('join-chat', user);
};

// Set user
export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user
  });
};

// User left chat
export const userLeft = user => dispatch => {
  dispatch({
    type: USER_LEFT,
    payload: {
      user,
      text: 'I leaving guys, bye bye!',
      left: true
    }
  });
};

// Disconnect
export const disconnect = socket => dispatch => {
  socket.emit('bye-im-leaving');

  dispatch({
    type: DISCONNECT
  });

  toast('Bye bye!', 'We looking forward to see you again!', 'success');
};

// Disconnected due to inavtivity
export const inactive = msg => dispatch => {
  toast('Uh oh!', msg, 'danger');

  dispatch({
    type: INACTIVE
  });
};

// Inactive user disconnected
export const inactiveUser = user => dispatch => {
  dispatch({
    type: INACTIVE_USER,
    payload: {
      user,
      text: 'I was too lazy to type, so I got disconnected due to inactivity',
      left: true
    }
  });
};
