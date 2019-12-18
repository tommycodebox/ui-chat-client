import { combineReducers } from 'redux';
import socket from './socket';
import messages from './messages';
import user from './user';

export default combineReducers({
  socket,
  messages,
  user
});
