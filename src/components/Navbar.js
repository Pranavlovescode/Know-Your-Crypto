import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#e3f2fd'}}>
        <div className="container-fluid">
          <a className="navbar-brand pt-0" href="#">
            <span className="text-primary" style={{fontSize:'22px'}}>K</span>now<span className="text-primary" style={{fontSize:'22px'}}>Y</span>our<span className="text-primary" style={{fontSize:'22px'}}>C</span>rypto
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
