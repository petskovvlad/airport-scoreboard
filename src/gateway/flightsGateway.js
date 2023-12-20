const baseUrl = `https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport`;

export const fetchFlights = () => {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};
