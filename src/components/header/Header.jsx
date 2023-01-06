import React from "react";
import "./header.css";
import brandModi from '../../assets/brandModi.png'

const Header = () => {
  return (
    <img className="brand" src={brandModi} alt="brand"/>
  );
};

export default Header;
