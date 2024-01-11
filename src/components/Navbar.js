import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged , signOut} from "firebase/auth";
import { app } from "./db/firebase";
import './navbar/makeLogin.css'
// import Login from "../Login";

const auth = getAuth(app);

function Navbar() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Login Sucessfull
        console.log("Login succssfull", user);
        setLogin(user);
      } else {
        // User not login
        console.log("you are logged out");
        setLogin(null);
      }
    });
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-blue position-sticky w-100"
        // style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid  fw-bold">
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
          <div className="collapse navbar-collapse text-lg-start" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-1 ">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-me" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {login === null ? (
              <form className="d-flex" role="search">
                <NavLink to={"/home/login"}>
                  <button
                    className="btn btn-outline-primary mx-2"
                    type="submit"
                  >
                    Login
                  </button>
                </NavLink>
                <NavLink to={"/home/signup"}>
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </NavLink>
              </form>
            ) : (
              <>
                {console.log("working")}
                <button onClick={()=>signOut(auth)} className="btn btn-primary" type="submit">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
