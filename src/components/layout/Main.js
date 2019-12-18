import React from 'react';
import '../../assets/scss/Main.scss';

// Routing
import { Switch, Route } from 'react-router-dom';

// Components
import Landing from '../pages/Landing';
import Chat from '../pages/Chat';

const Main = () => {
  return (
    <div className='Main'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </div>
  );
};

export default Main;
