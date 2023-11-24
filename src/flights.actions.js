import { fetchFlights } from "./flightsGateway";

export const FLIGHTS_DATA_RECIEVED = 'FLIGHTS_DATA_RECIEVED';
export const FLIGHTS_DATA_FETCHING = 'FLIGHTS_DATA_FETCHING';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export const flightsDataReceived = flightsData => {
  return {
    type: FLIGHTS_DATA_RECIEVED,
    payload: flightsData,
  }
}

export const flightsDataFfetching = () => {
  return {
    type: FLIGHTS_DATA_FETCHING,
  }
}

export const searchFlights = filterText => {
  return {
    type: SEARCH_FLIGHTS,
    payload: filterText,
  }
}

export const getFlightsData = () => {
  return function(dispatch) {
    dispatch(flightsDataFfetching());
    fetchFlights()
      .then(flightsData => dispatch(flightsDataReceived(flightsData))) 
  }
}