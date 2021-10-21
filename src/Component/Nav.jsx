import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="container-fluid ">
        <nav className="navbar navbar-default navbar-fixed-top navbar-home">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <h6>
                {" "}
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "900px",
                  }}
                >
                  Filler
                </span>{" "}
                <span
                  style={{
                    color: "red",
                    fontSize: "30px",
                    fontWeight: "900px",
                  }}
                >
                  Hub
                </span>
              </h6>
            </div>

            <div
              className="collapse navbar-collapse nav-button"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right nav-button">
                <li>
                  <Link to="/" className="links">
                    Magazine
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/sport" className="links">
                    {" "}
                    Sport
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/tech" className="links">
                    Technology
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/science" className="links">
                    Science
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/poli" className="links">
                    Politics
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/business" className="links">
                    Business
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
