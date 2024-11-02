import React from "react";
// import '../index.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">
        {/* Flexbox utility to justify space between logo and nav items on lg screens */}
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Zerodha logo */}
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="zerodha-logo" style={{ width: "100px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          {/* Toggler button for smaller screens */}
         

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
              </li>
            </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
