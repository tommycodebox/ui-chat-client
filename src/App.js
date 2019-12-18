import React from 'react';
import './assets/scss/App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>App</div>
    </Provider>
  );
};

export default App;
