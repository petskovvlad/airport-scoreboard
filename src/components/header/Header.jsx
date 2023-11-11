import React, { useState } from "react";
import './header.scss';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="header">
      <div className="logo">
        <img className="logo_image" src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png" alt="logo"></img>
      </div>
      <nav className="navigation">
        <a href="#" className="navigation__item">For passengers</a>
        <a href="#" className="navigation__item">IEV Services</a>
        <a href="#" className="navigation__item">VIP</a>
        <a href="#" className="navigation__item">Corporate</a>
        <a href="#" className="navigation__item">Press Room</a>
        <button className="navigation__item language-button" onClick={toggleDropdown}>EN</button>
        {isDropdownVisible && (
          <button className="navigation__item dropdown" onClick={toggleDropdown}>UA</button>
        )}
      </nav>
    </header>
  )
}

export default Header;