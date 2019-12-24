import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../../assets/scss/Landing.scss';

// Routing
import { withRouter } from 'react-router-dom';

// Components
import ConnectForm from '../layout/ConnectForm';

// Redux
import { connect } from 'react-redux';
import {
  setLandingListeners,
  clearLandingListeners
} from '../../actions/socket';

const Landing = ({
  socket,
  history,
  user,
  setLandingListeners,
  clearLandingListeners
}) => {
  useEffect(() => {
    if (socket) setLandingListeners(socket);
    return () => {
      if (socket) clearLandingListeners(socket);
    };
  }, [socket, setLandingListeners, clearLandingListeners]);

  // Redirect when user state is filled
  useEffect(() => {
    if (user) {
      history.push('/chat');
    }
  }, [user, history]);
  return (
    <div className='Landing'>
      <h1 className='welcome'>Welcome to UI chat, friend!</h1>
      <ConnectForm history={history} />
    </div>
  );
};

Landing.propTypes = {
  user: PropTypes.object,
  setLandingListeners: PropTypes.func.isRequired,
  clearLandingListeners: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  socket: state.socket,
  user: state.user
});

export default connect(mapStateToProps, {
  setLandingListeners,
  clearLandingListeners
})(withRouter(Landing));
