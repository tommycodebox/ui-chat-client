import React from 'react';
import '../../assets/scss/Landing.scss';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='Landing'>
      <h1 className='welcome'>Welcome to UI chat, friend!</h1>
      <form className='connect-box'>
        <h3 className='title'>To start chatting, enter your username</h3>

        <div className='input-group'>
          <input type='text' />
          <label>Username</label>
        </div>
        <Link to='/chat' className='connect'>
          Connect
        </Link>
      </form>
    </div>
  );
};

export default Landing;
