import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../assets/scss/Landing.scss';

// Routing
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { joinChat, setUser } from '../../actions/user';

// Utils
import toast from '../../utils/toast';

const Landing = ({ socket, joinChat, setUser, history, user }) => {
  const [uname, setUname] = useState('');
  const joinChatHandler = e => {
    e.preventDefault();
    if (socket) {
      if (uname.length > 0) {
        if (socket.connected) {
          joinChat(socket, uname, history);
        } else {
          toast(
            'Uh uh!',
            'Looks like server is unavailable ATM, please try again later.',
            'danger'
          );
        }
      }
    }
  };
  // On successful chat join, set user state
  useEffect(() => {
    socket &&
      socket.on('join-chat-success', user => {
        setUser(user);
      });
    return () => {
      socket && socket.off('join-chat-success');
    };
  }, [socket, setUser]);

  // Redirect when user state is filled
  useEffect(() => {
    if (user) {
      history.push('/chat');
    }
  }, [user, history]);

  // On 'username-taken' event, dispay tost error
  useEffect(() => {
    socket &&
      socket.on('username-taken', msg => {
        toast('Bummer!', msg, 'danger');
      });
    return () => {
      socket && socket.off('username-taken');
    };
  }, [socket]);
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
  joinChat: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  socket: state.socket,
  user: state.user
});

export default connect(mapStateToProps, { joinChat, setUser })(
  withRouter(Landing)
);
