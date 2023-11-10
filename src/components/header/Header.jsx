import React from "react";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo_image" src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/icon.png" alt="logo"></img>
      </div>
      <nav className="navigation">
        <a href="#" className="navigation__item">For passengers</a>
        <a href="#" className="navigation__item">IEV Services</a>
        <a href="#" className="navigation__item">VIP</a>
        <a href="#" className="navigation__item">Corporate</a>
        <a href="#" className="navigation__item">Press Room</a>
        <button className="language-button">EN</button>
      </nav>
    </header>
  )
}

export default Header;