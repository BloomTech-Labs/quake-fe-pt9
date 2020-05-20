import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div id="menu">
      <ul>
        <li class="current_page_item">
          <NavLink className="navie" to="/">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink className="navie" to="/Login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="navie" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className="navie" to="/">
            Preparedness
          </NavLink>
        </li>
        <li>
          <NavLink className="navie" to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
