import dayjs from 'dayjs';
export const departureListSelector = (state) => {
  return state.flightsData.filter(flight => flight.type === 'DEPARTURE')
}

export const arrivalListSelector = (state) => {
  return state.flightsData.filter(flight => flight.type === 'ARRIVAL');
}

export const filteredDepartureListSelector = (state, selectedDate) => {
  const departuresList = departureListSelector(state);
  return departuresList.filter(
    (flightData) =>
      dayjs(flightData.departureDateExpected).isSame(selectedDate, 'day')
  );
};

export const filteredArrivalListSelector = (state, selectedDate) => {
  const arrivalsList = arrivalListSelector(state);
  return arrivalsList.filter(
    (flightData) =>
      dayjs(flightData.departureDateExpected).isSame(selectedDate, 'day')
  );
};