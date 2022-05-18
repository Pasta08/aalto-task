import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={process.env.PUBLIC_URL + `/images/aalto_it.png`} alt="" />
    </div>
  );
};

export default Navbar;
