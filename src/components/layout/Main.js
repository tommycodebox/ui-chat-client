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
import { setSocket } from '../../actions/socket';

const Main = ({ setSocket }) => {
  useEffect(() => {
    setSocket();
  }, [setSocket]);
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
  setSocket: PropTypes.func.isRequired
};

export default connect(null, { setSocket })(Main);
