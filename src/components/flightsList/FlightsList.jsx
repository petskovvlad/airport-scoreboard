import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useHistory, useParams } from 'react-router-dom';
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
  const history = useHistory();
  const { type, currentDate } = useParams();

  const [departuresSelected, changeSelected] = useState(() => {
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

  const currentType = departuresSelected ? 'departures' : 'arrivals';

  const getPrevDay = () => {
    const newDate = date.subtract(1, 'day');
    setDate(newDate);
    const newUrl = `/${currentType}/${newDate.format('MM-DD-YYYY')}`;
    history.push(newUrl);
  };

  const getNextDay = () => {
    const newDate = date.add(1, 'day');
    setDate(newDate);
    const newUrl = `/${currentType}/${newDate.format('MM-DD-YYYY')}`;
    history.push(newUrl);
  };

  const getToday = () => {
    const newDate = dayjs();
    setDate(newDate);
    const newUrl = `/${currentType}/${newDate.format('MM-DD-YYYY')}`;
    history.push(newUrl);
  };

  const showData = data => {
    return data.length === 0
      ? noFlights
      : data.map(flightData => <FlightInfo key={flightData.id} flightData={flightData} />);
  };

  useEffect(() => {
    getFlightsData();
  }, [type, currentDate, date, getFlightsData]);

  return (
    <div className="board">
      <div className="buttons">
        <Link
          className={`btn buttons__departures ${departuresSelected ? 'btn-selected' : ''}`}
          {...(!departuresSelected && {
            onClick: () => changeSelected(!departuresSelected),
          })}
          to={`/departures/${date.format('MM-DD-YYYY')}`}
        >
          <button>DEPARTURES</button>
        </Link>
        <Link
          className={`btn buttons__arrivals ${!departuresSelected ? 'btn-selected' : ''}`}
          {...(departuresSelected && {
            onClick: () => changeSelected(!departuresSelected),
          })}
          to={`/arrivals/${date.format('MM-DD-YYYY')}`}
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
              setDate(newValue);
              const newUrl = `/${currentType}/${newValue.format('MM-DD-YYYY')}`;
              history.push(newUrl);
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

FlightsList.propTypes = {
  getFlightsData: PropTypes.func.isRequired,
};

const mapDispatch = {
  getFlightsData,
};

export default connect(null, mapDispatch)(FlightsList);
