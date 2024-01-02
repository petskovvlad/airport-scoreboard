import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page from './Page';
import store from '../store';
import FlightsList from './flightsList/FlightsList';
import Header from './header/Header';
import FlightsInput from './flightsInput/FlightsInput';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="page">
          <FlightsInput />
          <Switch>
            <Route path="/" exact component={Page} />
            <Route path="/:type/:currentDate" component={FlightsList} />
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
