import React from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../assets/scss/Navbar.scss';
import { ReactComponent as Logo } from '../../assets/img/ui-logo.svg';

// Redux
import { connect } from 'react-redux';
import { disconnect } from '../../actions/user';

const Navbar = ({ user, disconnect, socket }) => {
  return (
    <div className='Navbar'>
      <div className='brand'>
        <Logo className='logo' />
      </div>
      {user && (
        <div className='right'>
          <div className='username'>
            Connected as: <span>{user.username}</span>
          </div>
          <button className='disconnect' onClick={() => disconnect(socket)}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  disconnect: PropTypes.func.isRequired,
  socket: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user,
  socket: state.socket
});

export default connect(mapStateToProps, { disconnect })(Navbar);
