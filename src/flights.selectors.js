import dayjs from 'dayjs';
export const departureListSelector = (state) => {
  const departures = state.flightsData || [];
  return departures
  .slice()
  .filter(flight => flight.type === 'DEPARTURE')
}

export const arrivalListSelector = (state) => {
  const arrivals = state.flightsData || [];
  return arrivals
  .slice()
  .filter(flight => flight.type === 'ARRIVAL');
}

export const filteredDepartureListSelector = (state, selectedDate) => {
  const departuresList = departureListSelector(state);
  return departuresList.filter(
    (flightData) =>
      dayjs(flightData.departureDateExpected).isSame(selectedDate, 'day')
  )
      .filter(flight => flight.codeShare
        .toLowerCase()
        .includes(state.filterText.toLowerCase())
    );
};

export const filteredArrivalListSelector = (state, selectedDate) => {
  const arrivalsList = arrivalListSelector(state);
  return arrivalsList.filter(
    (flightData) =>
      dayjs(flightData.departureDateExpected).isSame(selectedDate, 'day')
  )
  .filter(flight => flight.codeShare
    .toLowerCase()
    .includes(state.filterText.toLowerCase())
    );
};