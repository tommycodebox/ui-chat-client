import React from 'react';

// Assets
import './assets/scss/App.scss';
import 'react-notifications-component/dist/theme.css';

// Routing
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Main from './components/layout/Main';
import ReactNotification from 'react-notifications-component';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <ReactNotification />
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
