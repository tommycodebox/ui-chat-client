import { combineReducers } from 'redux';
import socket from './socket';
import messages from './messages';
import user from './user';
import users from './users';

export default combineReducers({
  socket,
  messages,
  user,
  users
});
