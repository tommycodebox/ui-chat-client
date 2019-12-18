import React, { useState } from 'react';
import '../../assets/scss/Landing.scss';
import PropTypes from 'prop-types';

// Routing
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { joinChat } from '../../actions/user';

const Landing = ({ socket, joinChat, history }) => {
  const [uname, setUname] = useState('');
  const joinChatHandler = e => {
    e.preventDefault();
    if (socket) {
      if (uname.length > 0) {
        joinChat(socket, uname, history);
      }
    }
  };
  return (
    <div className='Landing'>
      <h1 className='welcome'>Welcome to UI chat, friend!</h1>
      <form className='connect-box' onSubmit={joinChatHandler}>
        <h3 className='title'>To start chatting, enter your username</h3>

        <div className={`input-group ${uname.length > 0 ? 'active' : ''}`}>
          <input
            type='text'
            value={uname}
            onChange={e => setUname(e.target.value)}
          />
          <label>Username</label>
        </div>
        <button className='connect'>Connect</button>
      </form>
    </div>
  );
};

Landing.propTypes = {
  joinChat: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  socket: state.socket
});

export default connect(mapStateToProps, { joinChat })(withRouter(Landing));
