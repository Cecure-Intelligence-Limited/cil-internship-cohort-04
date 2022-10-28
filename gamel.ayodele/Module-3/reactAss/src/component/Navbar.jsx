import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  mb-3">
      <div className="container">
        <div className="container contain">
          <NavLink className="navbar-brand" to="/">
            Contact Manager
          </NavLink>

          <button
            className="navbar-toggler d"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                <img
                  src={require("../assets/home.png")}
                  className="img-nav"
                  alt="img"
                />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                <img
                  src={require("../assets/add.png")}
                  className="img-nav"
                  alt="img"
                />
                Add
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <img
                  src={require("../assets/about.png")}
                  className="img-nav"
                  alt="img"
                />
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
