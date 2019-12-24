import React from 'react';
import '../../assets/scss/Message.scss';
import Moment from 'react-moment';

const Message = ({ me, username, time, text, left, joined }) => {
  return (
    <div className={`Message ${left ? 'left' : ''} ${joined ? 'joined' : ''}`}>
      <div className={`msg ${me === username ? 'mine' : 'ext'}`}>
        <div className='username'>{username}</div>
        <div className='text'>{text}</div>
        <div className='time'>
          <Moment fromNow>{time}</Moment>
        </div>
      </div>
    </div>
  );
};

export default Message;
