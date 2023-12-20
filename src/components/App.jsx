import React from 'react';
import { Provider } from 'react-redux';
import Page from './Page';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
