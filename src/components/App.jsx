import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page from './Page';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
