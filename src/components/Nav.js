import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="navie" to="/">
        Home
      </NavLink>
      <NavLink className="navie" to="/Login">
        Login
      </NavLink>
      <NavLink className="navie" to="/register">
        Register
      </NavLink>
      <NavLink className="navie" to="/contact">
        Contact
      </NavLink>
      <NavLink className="navie" to="/prepare">
        Prepare
      </NavLink>
      <NavLink className="navie" to="/fema">
        Fema
      </NavLink>
    </div>
  );
};

export default Nav;
