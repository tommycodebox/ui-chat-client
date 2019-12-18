import { SET_USER } from './types';

// Join chat
export const joinChat = (socket, username, history) => dispatch => {
  const user = {
    id: socket.id,
    username
  };

  socket.emit('join-chat', user);

  // dispatch({
  //   type: JOIN_CHAT,
  //   payload: user
  // });

  // history.push('/chat');
};

// Set user
export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user
  });
};
