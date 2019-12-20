import React from 'react';
import '../../assets/scss/Message.scss';

const Message = ({ me, username, text, left }) => {
  return (
    <div className={`Message ${left ? 'left' : ''}`}>
      <div className={`msg ${me === username ? 'mine' : 'ext'}`}>
        <div className='username'>{username}</div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};

export default Message;
