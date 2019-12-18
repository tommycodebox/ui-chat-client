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

const Chat = ({ user, messages, socket, newMessage, sendMessage }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket &&
      socket.on('message', msg => {
        newMessage(msg);
      });
    return () => {
      socket && socket.off('message');
    };
  }, [socket, newMessage]);

  const sendMessageHandler = e => {
    e.preventDefault();
    sendMessage(message, user.username, socket);
  };

  if (!user) return <Redirect to='/' />;
  return (
    <div className='Chat'>
      <div className='messages'>
        {messages.map(msg => (
          <Message me={user.username} username={msg.user} text={msg.text} />
        ))}
        {/* <Message
          type='ext'
          username='Tommy'
          text='This is a pretty long message'
        />
        <Message type='mine' username='Tommy' text='This is message' /> */}
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
  sendMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages,
  socket: state.socket
});

export default connect(mapStateToProps, { newMessage, sendMessage })(Chat);
