import React from "react";
import Header from './header/Header';
import FlightsInput from "./flightsInput/FlightsInput";

const Page = () => {
  return (
    <>
    <Header />
    <main className="page">
      <FlightsInput />
    </main>
    </>
  )
}

export default Page;