import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../assets/scss/Navbar.scss';
import { ReactComponent as Logo } from '../../assets/img/ui-logo.svg';

// Redux
import { connect } from 'react-redux';
import { disconnect } from '../../actions/user';
import { setUsers, newUserJoined } from '../../actions/users';

const Navbar = ({
  user,
  disconnect,
  socket,
  setUsers,
  users,
  newUserJoined
}) => {
  useEffect(() => {
    if (socket && user) {
      socket.on('connected-users', users => {
        setUsers(users);
      });
      socket.on('hello-there', user => {
        newUserJoined(user);
        socket.emit('hm-users');
      });
    }
    return () => {
      socket && socket.off('connected-users');
      socket && socket.off('hello-there');
    };
  }, [socket, setUsers, user, newUserJoined]);

  return (
    <div className='Navbar'>
      <div className='brand'>
        <Logo className='logo' />
      </div>
      {user && (
        <>
          <div className='center'>
            <p>
              Connected users: <span>{users.length}</span>
            </p>
          </div>
          <div className='right'>
            <div className='username'>
              Connected as: <span>{user.username}</span>
            </div>
            <button className='disconnect' onClick={() => disconnect(socket)}>
              Disconnect
            </button>
          </div>
        </>
      )}
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  disconnect: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
  socket: PropTypes.object,
  users: PropTypes.array.isRequired,
  newUserJoined: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  socket: state.socket,
  users: state.users
});

export default connect(mapStateToProps, {
  disconnect,
  setUsers,
  newUserJoined
})(Navbar);
