import React from "react";
import './header.scss';

const Header = () => {
  return (
    <div className="header">
        <img 
          className="header__logo" 
          src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png" 
          alt="logo" />
    </div>
  )
}

export default Header;