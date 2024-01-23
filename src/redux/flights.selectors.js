import { createSelector } from 'reselect';
import dayjs from 'dayjs';

const flightsDataSelector = state => state.flightsData || [];
const filterTextSelector = state => state.filterText;

const departureListSelector = createSelector(flightsDataSelector, flightsData =>
  flightsData.filter(flight => flight.type === 'DEPARTURE'),
);

const arrivalListSelector = createSelector(flightsDataSelector, flightsData =>
  flightsData.filter(flight => flight.type === 'ARRIVAL'),
);

const selectedDateSelector = (_, selectedDate) => selectedDate;

const filteredDepartureListSelector = createSelector(
  departureListSelector,
  selectedDateSelector,
  filterTextSelector,
  (departures, selectedDate, filterText) =>
    departures.filter(({ departureDateExpected, codeShare }) => {
      const isSameDay = dayjs(departureDateExpected).isSame(selectedDate, 'day');
      const matchesFilter = codeShare && codeShare.toLowerCase().includes(filterText.toLowerCase());
      return isSameDay && matchesFilter;
    }),
);

const filteredArrivalListSelector = createSelector(
  arrivalListSelector,
  selectedDateSelector,
  filterTextSelector,
  (arrivals, selectedDate, filterText) => {
    return arrivals.filter(({ departureDateExpected, codeShare }) => {
      const isSameDay = dayjs(departureDateExpected).isSame(selectedDate, 'day');
      const matchesFilter = codeShare && codeShare.toLowerCase().includes(filterText.toLowerCase());
      return isSameDay && matchesFilter;
    });
  },
);

export {
  departureListSelector,
  arrivalListSelector,
  filteredDepartureListSelector,
  filteredArrivalListSelector,
};
