import React from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../assets/scss/Navbar.scss';
import { ReactComponent as Logo } from '../../assets/img/ui-logo.svg';

// Redux
import { connect } from 'react-redux';

const Navbar = ({ user }) => {
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
          <button className='disconnect'>Disconnect</button>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);
