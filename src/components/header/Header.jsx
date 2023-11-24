import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from "@fortawesome/free-solid-svg-icons";

import './header.scss';

const Header = () => {
  return (
    <div className="header">
          <FontAwesomeIcon icon={faPlane} className="header__logo" />
    </div>
  )
}

export default Header;