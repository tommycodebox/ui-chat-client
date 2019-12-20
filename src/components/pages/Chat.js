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
import { userLeft } from '../../actions/user';

const Chat = ({
  user,
  messages,
  socket,
  newMessage,
  sendMessage,
  userLeft
}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket && socket.on('message', msg => newMessage(msg));
    return () => {
      socket && socket.off('message');
    };
  }, [socket, newMessage]);

  useEffect(() => {
    socket &&
      socket.on('bye', user => {
        if (user) userLeft(user.username);
      });
    return () => {
      socket && socket.off('bye');
    };
  }, [socket, userLeft]);

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
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  socket: PropTypes.object.isRequired,
  newMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  userLeft: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages,
  socket: state.socket
});

export default connect(mapStateToProps, { newMessage, sendMessage, userLeft })(
  Chat
);
