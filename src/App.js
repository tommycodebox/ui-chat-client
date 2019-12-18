import React from 'react';
import './assets/scss/App.scss';

// Routing
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Main from './components/layout/Main';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
