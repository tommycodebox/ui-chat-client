import { SET_SOCKET } from './types';
import openSocket from 'socket.io-client';

// Set socket
export const setSocket = () => dispatch => {
  const io = openSocket('http://localhost:5000');
  dispatch({
    type: SET_SOCKET,
    payload: io
  });
};
