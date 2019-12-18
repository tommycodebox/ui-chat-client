import { JOIN_CHAT } from './types';

// Join chat
export const joinChat = (socket, username, history) => dispatch => {
  const user = {
    id: socket.id,
    username
  };

  socket.emit('join-chat', user);

  dispatch({
    type: JOIN_CHAT,
    payload: user
  });

  history.push('/chat');
};
