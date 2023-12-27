import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header id="header-section">
        <nav className="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
          <div className="container">
            <div className="navbar-brand-wrapper d-flex w-100">
              <a href="/">
                <img
                  src="images/elibrary.png"
                  alt=""
                  width={150}
                  height="auto"
                />
              </a>
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse navbar-menu-wrapper"
              id="navbarSupportedContent"
            >
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/book">Book</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>

              <Outlet />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
