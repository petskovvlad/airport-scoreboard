import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import './search.scss';

const Search = () => {
  return (
    <div className="search">
        <h1 className="search__title">FLIGHT SEARCH</h1>
        <form className="search__form">
            <input className="search__input" type="text" placeholder="Airline, destination or flight #"/>
            <button className="search__button">SEARCH</button>
        </form>
        <div className='search__view-flights'>
          <button className="search__view-flights--departures"><FontAwesomeIcon icon={faPlaneDeparture} className='search__view-flights--icon'/>ALL DEPARTURES</button>
          <button className="search__view-flights--arrivals">ALL ARRIVALS<FontAwesomeIcon icon={faPlaneArrival} className='search__view-flights--icon'/></button>
        </div>
    </div>
  )
}

export default Search;