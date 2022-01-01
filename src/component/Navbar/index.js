import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <NavLink to="/">Ultra Profile</NavLink>
          </div>
          <ul>
            <li>
              <NavLink className="link" to="/react-website/">
                home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/work">
                work
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/portfolio">
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/profile">
                profile
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                about
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/Contact">
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
