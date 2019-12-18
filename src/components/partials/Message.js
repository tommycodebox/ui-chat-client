import React from 'react';
import '../../assets/scss/Message.scss';

const Message = ({ me, username, text }) => {
  return (
    <div className='Message'>
      <div className={`msg ${me === username ? 'mine' : 'ext'}`}>
        <div className='username'>{username}</div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};

export default Message;
