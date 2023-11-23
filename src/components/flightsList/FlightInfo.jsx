import React from "react";
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

export default FlightInfo;