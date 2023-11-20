import React from "react";
import FlightsInput from "./flightsInput/FlightsInput";
import Header from "./header/Header";

const App = () => {
  return (
    <div className="page">
      <Header />
      <FlightsInput />
    </div>
  )
}

export default App;