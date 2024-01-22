import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchFlights } from '@redux/flights.actions.js';
import './flightsInput.scss';

const FlightsInput = ({ searchFlights }) => {
  const [inputValue, changeInputValue] = useState('');

  return (
    <div className="flight-input">
      <h1 className="flight-input__title">FLIGHT SEARCH</h1>
      <div className="flight-input__input-block search-block">
        <i className="search-block__manifier">
          <FontAwesomeIcon icon={faSearch} />
        </i>
        <input
          placeholder="Flight #"
          type="text"
          name="flight-number"
          className="search-block__input"
          value={inputValue}
          onChange={(e) => changeInputValue(e.target.value)}
        />
        <button className="search-block__button" onClick={() => searchFlights(inputValue)}>
          Search
        </button>
      </div>
    </div>
  );
};

FlightsInput.propTypes = {
  searchFlights: PropTypes.func.isRequired,
};

const mapDispatch = {
  searchFlights,
};

export default connect(null, mapDispatch)(FlightsInput);
