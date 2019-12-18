import React from 'react';
import '../../assets/scss/Main.scss';

// Routing
import { Switch, Route } from 'react-router-dom';

// Components
import Landing from '../pages/Landing';
import Chat from '../pages/Chat';
import Navbar from './Navbar';

const Main = () => {
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

export default Main;
