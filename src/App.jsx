import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Information from "./components/information/Information";
import News from "./components/news/News";
import Search from "./components/search/Search";

const App = () => {
  return (
    <div className="page">
      <Header />
      <Search />
      <Information />
      <News />
      <Footer />
    </div>
  )
}

export default App;