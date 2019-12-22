import React from 'react';
import '../../assets/scss/Message.scss';

const Message = ({ me, username, text, left, joined }) => {
  return (
    <div className={`Message ${left ? 'left' : ''} ${joined ? 'joined' : ''}`}>
      <div className={`msg ${me === username ? 'mine' : 'ext'}`}>
        <div className='username'>{username}</div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};

export default Message;
