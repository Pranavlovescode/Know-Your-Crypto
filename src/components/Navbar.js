import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand pt-0">
            <span className="text-primary" style={{ fontSize: "22px" }}>
              K
            </span>
            now
            <span className="text-primary" style={{ fontSize: "22px" }}>
              Y
            </span>
            our
            <span className="text-primary" style={{ fontSize: "22px" }}>
              C
            </span>
            rypto
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-1 ">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <NavLink to={'/login'}>
                <button className="btn btn-outline-primary mx-2" type="submit">
                  Login
                </button>
              </NavLink>
              <NavLink to={"/signup"}>
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
