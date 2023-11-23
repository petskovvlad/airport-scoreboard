import { FLIGHTS_DATA_FETCHING, FLIGHTS_DATA_RECIEVED, SEARCH_FLIGHTS } from "./flights.actions";

const initialState = {
  flightsData: [],
  filterText: '',
  isDataFetching: false,
}

const flightsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FLIGHTS_DATA_FETCHING: 
      return {
        ...state,
        isDataFetching: true,
      }
    case FLIGHTS_DATA_RECIEVED: 
      return {
        ...state,
        flightsData: action.payload,
        isDataFetching: false,
      }
    case SEARCH_FLIGHTS: 
      return {
        ...state,
        filterText: action.payload
      }
    default:
      return state;
  }
}

export default flightsReducer;