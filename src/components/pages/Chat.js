import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../assets/scss/Chat.scss';

// Routing
import { Redirect } from 'react-router-dom';

// Partials
import Message from '../partials/Message';

// Redux
import { connect } from 'react-redux';
import { newMessage, sendMessage } from '../../actions/messages';
import { userLeft, inactive, inactiveUser } from '../../actions/user';

const Chat = ({
  user,
  messages,
  socket,
  newMessage,
  sendMessage,
  userLeft,
  inactive,
  inactiveUser
}) => {
  const [message, setMessage] = useState('');

  // Socket listeners
  useEffect(() => {
    if (socket) {
      socket.on('message', msg => newMessage(msg));
      socket.on('bye', user => {
        if (user) userLeft(user.username);
      });
      socket.on('AFK', msg => {
        inactive(msg);
      });
      socket.on('inactive-user', user => {
        inactiveUser(user);
      });
    }
    return () => {
      if (socket) {
        socket.off('message');
        socket.off('bye');
        socket.off('AFK');
        socket.off('inactive-user');
      }
    };
  }, [socket, newMessage, userLeft, inactive, inactiveUser]);

  useEffect(() => {
    if (messages.length > 0) {
      const msgList = document.querySelector('.messages');
      msgList.scrollTop = msgList.scrollHeight;
    }
  }, [messages]);

  const sendMessageHandler = e => {
    e.preventDefault();
    if (message.length > 0) {
      sendMessage(message, user.username, socket);
      setMessage('');
    }
  };

  if (!user) return <Redirect to='/' />;
  return (
    <div className='Chat'>
      <div className='messages'>
        {messages.map(msg => (
          <Message
            me={user.username}
            username={msg.user}
            text={msg.text}
            left={msg.left}
          />
        ))}
      </div>
      <div className='write-wrapper'>
        <form className='write' onSubmit={sendMessageHandler}>
          <input
            type='text'
            placeholder='Send a message'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className='send'>Send</button>
        </form>
      </div>
    </div>
  );
};

Chat.propTypes = {
  user: PropTypes.object,
  messages: PropTypes.array.isRequired,
  socket: PropTypes.object.isRequired,
  newMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  userLeft: PropTypes.func.isRequired,
  inactive: PropTypes.func.isRequired,
  inactiveUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages,
  socket: state.socket
});

export default connect(mapStateToProps, {
  newMessage,
  sendMessage,
  userLeft,
  inactive,
  inactiveUser
})(Chat);
