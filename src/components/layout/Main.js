import React, { useEffect } from 'react';
import '../../assets/scss/Main.scss';
import PropTypes from 'prop-types';

// Routing
import { Switch, Route } from 'react-router-dom';

// Components
import Landing from '../pages/Landing';
import Chat from '../pages/Chat';
import Navbar from './Navbar';

// Redux
import { connect } from 'react-redux';
import { setSocket, serverDown, socketConnected } from '../../actions/socket';

const Main = ({ setSocket, socket, serverDown, socketConnected }) => {
  useEffect(() => {
    setSocket();
  }, [setSocket]);

  useEffect(() => {
    socket &&
      socket.on('disconnect', () => {
        serverDown(socket);
      });
  }, [socket, serverDown]);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        socketConnected();
      });
    }
  }, [socket, socketConnected]);
  return (
    <div className='Main'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </div>
  );
};

Main.propTypes = {
  setSocket: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  serverDown: PropTypes.func.isRequired,
  socketConnected: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  socket: state.socket
});

export default connect(mapStateToProps, {
  setSocket,
  serverDown,
  socketConnected
})(Main);
