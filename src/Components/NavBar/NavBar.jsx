import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <Link to="/" class="navbar-brand">
          Asad's Store
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 text-center">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">
                الرئيسية
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link active" aria-current="page">
                حول المتجر
              </Link>
            </li>
          </ul>
          <div class="d-flex">
            <Link
              to="https://github.com/AsadThafer"
              class="btn btn-outline-dark"
              target="_blank"
            >
              <i class="bi bi-github"> GitHub</i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
