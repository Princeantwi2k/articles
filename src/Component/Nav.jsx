import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <nav fixed="top">
          <div class="logo">
            JAH <span style={{ color: `red` }}>MOVIES</span>
          </div>
          <div class="menu">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/favorite" className="link">
                  Favorite
                </Link>
              </li>
              <li>
                <Link to="/top" className="link">
                  Top Movies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
