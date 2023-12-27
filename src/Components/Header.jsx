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
              <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
                <li className="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
                  <div className="navbar-collapse-logo">
                    <img
                      src="images/elibrary.png"
                      alt=""
                      width={150}
                      height="auto"
                    />
                  </div>
                  <button
                    className="navbar-toggler close-button"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="mdi mdi-close pl-5"></span>
                  </button>
                </li>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/book">Book</Link>
                </li>

                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
