import { SET_SOCKET, SERVER_DOWN, SOCKET_CONNECTED } from './types';
import openSocket from 'socket.io-client';
import toast from '../utils/toast';

const serverURI = process.env.REACT_APP_CHAT_SERVER || 'http://localhost:5000';

// Set socket
export const setSocket = () => dispatch => {
  const io = openSocket(serverURI);
  dispatch({
    type: SET_SOCKET,
    payload: io
  });
};

// Server down
export const serverDown = socket => dispatch => {
  socket.close();
  dispatch({
    type: SERVER_DOWN
  });
  toast(
    'Uh oh!',
    'Looks like the server went down, trying to reconnect...',
    'danger'
  );
  dispatch(setSocket());
};

// Socket connected
export const socketConnected = () => dispatch => {
  toast('Worked!', 'Socket connection established', 'success');
  dispatch({
    type: SOCKET_CONNECTED
  });
};
