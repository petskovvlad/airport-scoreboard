import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import flightsReducer from './flights.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  flightsReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store;