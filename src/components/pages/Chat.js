import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../assets/scss/Chat.scss';

// Routing
import { Redirect } from 'react-router-dom';

// Components
import Messages from '../layout/Messages';
import Users from '../layout/Users';
import WriteMessage from '../layout/WriteMessage';

// Redux
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messages';
import { setChatListeners, clearChatListeners } from '../../actions/socket';

const Chat = ({
  user,
  messages,
  socket,
  sendMessage,
  setChatListeners,
  clearChatListeners
}) => {
  const [message, setMessage] = useState('');

  // Socket listeners
  useEffect(() => {
    if (socket) setChatListeners(socket);
    return () => {
      if (socket) clearChatListeners(socket);
    };
  }, [socket, setChatListeners, clearChatListeners]);

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
      <Messages messages={messages} user={user} />
      <Users />
      <WriteMessage
        sendMessageHandler={sendMessageHandler}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

Chat.propTypes = {
  user: PropTypes.object,
  messages: PropTypes.array.isRequired,
  socket: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  setChatListeners: PropTypes.func.isRequired,
  clearChatListeners: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages,
  socket: state.socket
});

export default connect(mapStateToProps, {
  sendMessage,
  setChatListeners,
  clearChatListeners
})(Chat);
