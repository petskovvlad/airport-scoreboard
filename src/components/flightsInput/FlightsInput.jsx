import React, { useState } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchFlights } from "../../flights.actions";
import './flightsInput.scss';

const FlightsInput = ({ searchFlights }) => {
  const [inputValue, changeInputValue] = useState('');

  const handleChange = e => {
    changeInputValue(e.target.value)
  }
  return (
    <div className="flight-input">
      <h1 className="flight-input__title">FLIGHT SEARCH</h1>
      <div className="flight-input__input-block search-block">
        <i className="search-block__manifier">
          <FontAwesomeIcon icon={faSearch} />
        </i>
        <input 
          placeholder="Flight #"
          type='text'
          name="flight-number"
          className="search-block__input"
          value={inputValue}
          onChange={handleChange}
        />
        <button 
          className="search-block__button"
          onClick={() => searchFlights(inputValue)}
        >
          Search
        </button>
      </div>
    </div>
  )
}

const mapDispatch = {
  searchFlights,
}

export default connect(null, mapDispatch)(FlightsInput);