import { createSelector } from 'reselect';
import dayjs from 'dayjs';

const flightsDataSelector = state => state.flightsData || [];
const filterTextSelector = state => state.filterText;

const departureListSelector = createSelector(
  flightsDataSelector,
  flightsData => flightsData.filter(flight => flight.type === 'DEPARTURE')
);

const arrivalListSelector = createSelector(
  flightsDataSelector,
  flightsData => flightsData.filter(flight => flight.type === 'ARRIVAL')
);

const selectedDateSelector = (_, selectedDate) => selectedDate;

const filteredDepartureListSelector = createSelector(
  departureListSelector,
  selectedDateSelector,
  filterTextSelector,
  (departures, selectedDate, filterText) =>
    departures
      .filter(flightData =>
        dayjs(flightData.departureDateExpected).isSame(selectedDate, 'day')
      )
      .filter(flight =>
        flight.codeShare.toLowerCase().includes(filterText.toLowerCase())
      )
);

const filteredArrivalListSelector = createSelector(
  arrivalListSelector,
  selectedDateSelector,
  filterTextSelector,
  (arrivals, selectedDate, filterText) =>
    arrivals
      .filter(flightData =>
        dayjs(flightData.departureDateExpected).isSame(selectedDate, 'day')
      )
      .filter(flight =>
        flight.codeShare.toLowerCase().includes(filterText.toLowerCase())
      )
);

export {
  departureListSelector,
  arrivalListSelector,
  filteredDepartureListSelector,
  filteredArrivalListSelector,
};
