import React from 'react';
import '../../assets/scss/Chat.scss';

// Partials
import Message from '../partials/Message';

const Chat = () => {
  return (
    <div className='Chat'>
      <div className='messages'>
        <Message
          type='ext'
          username='Tommy'
          text='This is a pretty long message that i have to make work with amazing css
        skills, so yeah, im doing that'
        />
        <Message
          type='mine'
          username='Tommy'
          text='This is a pretty long message that i have to make work with amazing css
        skills, so yeah, im doing that, This is a pretty long message that i have to make work with amazing css
        skills, so yeah, im doing that'
        />
        <Message
          type='ext'
          username='Tommy'
          text='This is a pretty long message that i have to make work with amazing css
        skills, so yeah, im doing that'
        />
        <Message
          type='mine'
          username='Tommy'
          text='This is a pretty long message that i have to make work with amazing css
        skills, so yeah, im doing that, This is a pretty long message that i have to make work with amazing css
        skills, so yeah, im doing that'
        />
      </div>
      <div className='write-wrapper'>
        <div className='write'>
          <input type='text' placeholder='Send a message' />
          <button className='send'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
