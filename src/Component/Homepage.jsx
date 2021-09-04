import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Movielist from "./Movielist";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <Container fluid className=" movie">
        <Movielist />
      </Container>
    );
  }
}

export default Homepage;
