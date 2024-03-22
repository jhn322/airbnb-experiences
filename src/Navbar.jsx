import React from "react";
import navLogo from "./assets/airbnb.png";

const Navbar = () => {
  return (
    <nav>
      <img className="nav-logo" src={navLogo} alt="airbnb logo" />
    </nav>
  );
};

export default Navbar;
