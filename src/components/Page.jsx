import React from 'react';
import Header from './header/Header';
import FlightsInput from './flightsInput/FlightsInput';
import FlightsList from './flightsList/FlightsList';

const Page = () => {
  return (
    <>
      <Header />
      <main className="page">
        <FlightsInput />
        <FlightsList />
      </main>
    </>
  );
};

export default Page;