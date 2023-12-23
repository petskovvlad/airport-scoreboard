import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import FlightInfo from './FlightInfo';
import CircularProgress from '@mui/material/CircularProgress';
import { getFlightsData } from '../../redux/flights.actions';
import {
  filteredArrivalListSelector,
  filteredDepartureListSelector,
} from '../../redux/flights.selectors';

import './flightsList.scss';

const FlightsList = ({ getFlightsData }) => {
  const [departuresSelected, changeSelected] = useState(true);
  const [date, setDate] = useState(
    localStorage.getItem('flightsDate') ? dayjs(localStorage.getItem('flightsDate')) : dayjs(),
  );

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

  const getPrevDay = () => {
    const newDate = dayjs(localStorage.getItem('flightsDate')).subtract(1, 'day');
    setDate(newDate);
    localStorage.setItem('flightsDate', newDate.format());
  };

  const getNextDay = () => {
    const newDate = dayjs(localStorage.getItem('flightsDate')).add(1, 'day');
    setDate(newDate);
    localStorage.setItem('flightsDate', newDate.format());
  };

  const getToday = () => {
    setDate(dayjs());
    localStorage.setItem('flightsDate', dayjs().format());
  };

  const showData = data => {
    return data.length === 0
      ? noFlights
      : data.map(flightData => <FlightInfo key={flightData.id} flightData={flightData} />);
  };

  useEffect(() => {
    getFlightsData();
  }, []);

  return (
    <BrowserRouter>
      <div className="board">
        <div className="buttons">
          <Link
            className={`btn buttons__departures ${departuresSelected ? 'btn-selected' : ''}`}
            {...(!departuresSelected && {
              onClick: () => changeSelected(!departuresSelected),
            })}
            to="/"
          >
            <button>DEPARTURES</button>
          </Link>
          <Link
            className={`btn buttons__arrivals ${!departuresSelected ? 'btn-selected' : ''}`}
            {...(departuresSelected && {
              onClick: () => changeSelected(!departuresSelected),
            })}
            to="/arrivals"
          >
            <button>ARRIVALS</button>
          </Link>
        </div>
        <div className="date-picker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Choose your date"
              value={date}
              onChange={newValue => {
                setDate(new Date(newValue));
                localStorage.setItem('flightsDate', new Date(newValue));
              }}
              textField={params => <TextField {...params} />}
            />
          </LocalizationProvider>
          <div className="date-picker__buttons">
            <button className="date-picker__btn prev-btn" onClick={getPrevDay}>
              PREV
            </button>
            <button className="date-picker__btn today-btn" onClick={getToday}>
              TODAY
            </button>
            <button className="date-picker__btn next-btn" onClick={getNextDay}>
              NEXT
            </button>
          </div>
        </div>
        {isDataFetching && <CircularProgress sx={{ marginTop: '36px' }} />}
        {!isDataFetching && (
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
                    <Route exact path="/">
                      {showData(filteredDeparturesList)}
                    </Route>
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
    </BrowserRouter>
  );
};

FlightsList.propTypes = {
  getFlightsData: PropTypes.func.isRequired,
};

const mapDispatch = {
  getFlightsData,
};

export default connect(null, mapDispatch)(FlightsList);
