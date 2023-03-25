import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link to="/" className="navbar-brand">
          Asad's Store
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                حول المتجر
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              to="https://github.com/AsadThafer"
              className="btn btn-outline-dark"
              target="_blank"
            >
              <i className="bi bi-github"> GitHub</i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
