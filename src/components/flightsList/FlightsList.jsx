import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import FlightInfo from './FlightInfo';
import Calendar from './Calendar';
import CircularProgress from '@mui/material/CircularProgress';
import { getFlightsData } from '@redux/flights.actions';
import {
  filteredArrivalListSelector,
  filteredDepartureListSelector,
} from '@redux/flights.selectors';

import './flightsList.scss';

const FlightsList = ({ getFlightsData }) => {
  const { 0: paramValue } = useParams();
  const [type, currentDate] = (paramValue?.split('/') ?? []);

  const [buttonTypeSelected, changeButtonTypeSelected] = useState(() => {
    switch (type) {
      case 'departures':
        return true;
      case 'arrivals':
        return false;
      default:
        return true;
    }
  });
  const [date, setDate] = useState(currentDate ? dayjs(currentDate) : dayjs());

  const filteredDeparturesList = useSelector(state => filteredDepartureListSelector(state, date));
  const filteredArrivalsList = useSelector(state => filteredArrivalListSelector(state, date));
  const isDataFetching = useSelector(state => state.isDataFetching);

  const noFlights = (
    <tr>
      <td colSpan="8" className="no-flights">
        No flights
      </td>
    </tr>
  );

  const showData = data => {
    return data.length === 0
      ? noFlights
      : data.map(flightData => <FlightInfo key={flightData.id} flightData={flightData} />);
  };

  const handleButtonClick = newType => {
    changeButtonTypeSelected(newType === 'departures');
    localStorage.setItem('selectedType', newType);
  };

  useEffect(() => {
    const savedType = localStorage.getItem('selectedType');
    if (savedType) {
      changeButtonTypeSelected(savedType === 'departures');
    }
    getFlightsData();
  }, [type, currentDate, date, getFlightsData]);

  return (
    <div className="board">
      <div className="buttons">
        <Link
          className={`btn buttons__departures ${buttonTypeSelected ? 'btn_selected' : ''}`}
          onClick={() => handleButtonClick('departures')}
          to={`/departures/${date.format('MM-DD-YYYY')}`}
        >
          <button>DEPARTURES</button>
        </Link>
        <Link
          className={`btn buttons__arrivals ${!buttonTypeSelected ? 'btn_selected' : ''}`}
          onClick={() => handleButtonClick('arrivals')}
          to={`/arrivals/${date.format('MM-DD-YYYY')}`}
        >
          <button>ARRIVALS</button>
        </Link>
      </div>
      <Calendar setDate={setDate} date={date} type={type} />
      {isDataFetching ? (
        <CircularProgress sx={{ marginTop: '36px' }} />
      ) : (
        <>
          {filteredDeparturesList.length > 0 || filteredArrivalsList.length > 0 ? (
            <table className="table">
              <thead className="table__header">
                <tr>
                  <th>Terminal</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Status</th>
                  <th>Airline</th>
                  <th>Flight</th>
                </tr>
              </thead>
              <tbody className="table__body">
                <Switch>
                  <Route path="/departures">{showData(filteredDeparturesList)}</Route>
                  <Route path="/arrivals">{showData(filteredArrivalsList)}</Route>
                </Switch>
              </tbody>
            </table>
          ) : (
            noFlights
          )}
        </>
      )}
    </div>
  );
};

const mapDispatch = {
  getFlightsData,
};

FlightsList.propTypes = {
  getFlightsData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(FlightsList);
