import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/Register">
          Register
        </NavLink>
        <NavLink className="navLink" to="/Login">
          Login
        </NavLink>
        <NavLink className="navLink" to="/Contact">
          Contact
        </NavLink>
        <NavLink className="navLink" to="/User">
          User
        </NavLink>
      </nav>
      <nav className="nav2">
        <div className="secondNavLinks">
          <NavLink className="secondNavLink" to="/">
            R5 Express
          </NavLink>
          <NavLink className="secondNavLink" to="/Cart">
            <i className="fa-solid fa-cart-shopping"></i> 2 Products - 140$
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
