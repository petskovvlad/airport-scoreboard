import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Page from './components/page/Page';
import FlightsList from './components/flightsList/FlightsList';
import FlightsInput from './components/flightsInput/FlightsInput';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="page">
          <FlightsInput />
          <Switch>
            <Route exact path="/*" component={Page} />
            <Route path="/:type/:currentDate" component={FlightsList} />
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
