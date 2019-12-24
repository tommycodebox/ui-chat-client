import { SET_SOCKET, SERVER_DOWN, SOCKET_CONNECTED } from './types';
import openSocket from 'socket.io-client';
import toast from '../utils/toast';

// Actions
import { newMessage } from './messages';
import { userLeft, inactive, inactiveUser, setUser } from './user';

const serverURI =
  process.env.NODE_ENV === 'production'
    ? 'https://chat-server.viq.app'
    : 'http://localhost:5000';

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
  toast('Nice!', 'Looks like server is up and can be reached!', 'success');
  dispatch({
    type: SOCKET_CONNECTED
  });
};

// Set chat listeners
export const setChatListeners = socket => dispatch => {
  socket.on('message', msg => dispatch(newMessage(msg)));
  socket.on('bye', user => {
    socket.emit('hm-users');
    if (user) dispatch(userLeft(user.username));
  });
  socket.on('AFK', msg => {
    dispatch(inactive(msg));
  });
  socket.on('inactive-user', user => {
    socket.emit('hm-users');
    dispatch(inactiveUser(user));
  });
};

// Clear chat listeners
export const clearChatListeners = socket => dispatch => {
  socket.off('message');
  socket.off('bye');
  socket.off('AFK');
  socket.off('inactive-user');
};

// Set landing listeners
export const setLandingListeners = socket => dispatch => {
  socket.on('join-chat-success', user => {
    dispatch(setUser(user));
    socket.emit('hm-users');
  });
  socket.on('username-taken', msg => {
    toast('Bummer!', msg, 'danger');
  });
  socket.on('validation-error', error => {
    toast('Uh uh!', error, 'danger');
  });
};

// Clear landing listeners
export const clearLandingListeners = socket => dispatch => {
  socket.off('join-chat-success');
  socket.off('username-taken');
  socket.off('validation-error');
};
