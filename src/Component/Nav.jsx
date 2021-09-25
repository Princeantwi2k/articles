import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <header>
          <div className="logo">
            Filler <span style={{ color: "red" }}>Hub</span>
          </div>
          <div>
            <ul>
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
        </header>
      </nav>
    </div>
  );
};

export default Nav;
