import React from 'react';
import '../../assets/scss/Message.scss';

const Message = ({ type, username, text }) => {
  return (
    <div className='Message'>
      <div className={'msg ' + type}>
        <div className='username'>{username}</div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};

export default Message;
