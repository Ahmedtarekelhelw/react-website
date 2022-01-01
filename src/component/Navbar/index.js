import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <NavLink to="/react-website/">Ultra Profile</NavLink>
          </div>
          <ul>
            <li>
              <NavLink className="link" to="/react-website/">
                home
              </NavLink>
            </li>
            <li>
              <a className="link" href="#work">
                work
              </a>
            </li>
            <li>
              <a className="link" href="#portfolio">
                portfolio
              </a>
            </li>
            <li>
              <a className="link" href="#profile">
                profile
              </a>
            </li>
            <li>
              <a className="link" href="#about">
                about
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
