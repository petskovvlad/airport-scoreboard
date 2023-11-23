export const departureListSelector = (state) => {
  return state.flightsData.filter(flight => flight.type === 'DEPARTURE');
}

export const arrivalListSelector = (state) => {
  return state.flightsData.filter(flight => flight.type === 'ARRIVAL');
}