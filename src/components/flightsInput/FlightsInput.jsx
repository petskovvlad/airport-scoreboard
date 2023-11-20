import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './flightsInput.scss';

const FlightsInput = () => {
  return (
    <div className="flight-input">
        <h1 className="flight-input__title">FLIGHT flight</h1>
        <div className="flight-input__input-block searh-block">
          <i className="seatch-block__manifest">
            <FontAwesomeIcon icon={faSearch} />
          </i>
          <input 
            placeholder="Flight #"
            type='text'
            name="flight-number"
            className="search-block__input"
          />
          <button 
            className="search-block__button"
          >
            Search
          </button>
        </div>
    </div>
  )
}

export default FlightsInput;