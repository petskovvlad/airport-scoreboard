import React from "react";
import PropTypes from 'prop-types';
import moment from 'moment';

const FlightInfo = ({ flightData }) => {
  const { terminal, airlineName, codeShare, departureCity, arrivalCity, departureDateExpected, arrivalDateExpected, status } = flightData;
  const formatDate = (date) => moment.unix(date).format('HH:mm');
  
  return (
    <tr className="table__body-row">
      <td className="terminal">{terminal}</td>
      <td className="cityName">{departureCity}</td>
      <td className="cityName">{arrivalCity}</td>
      <td className="date">{formatDate(departureDateExpected)}</td>
      <td className="date">{formatDate(arrivalDateExpected)}</td>
      <td className="status">{status}</td>
      <td className="company-name">{airlineName}</td>
      <td className="flight-number">{codeShare}</td>
    </tr>
  )
}

FlightInfo.propTypes = {
  flightData: PropTypes.shape({
    terminal: PropTypes.string.isRequired,
    airlineName: PropTypes.string.isRequired,
    codeShare: PropTypes.string.isRequired,
    departureCity: PropTypes.string.isRequired,
    arrivalCity: PropTypes.string.isRequired,
    departureDateExpected: PropTypes.number.isRequired,
    arrivalDateExpected: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlightInfo;