import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Toplist from "./Toplist";

class TopMovies extends Component {
  render() {
    return (
      <Container fluid className=" movie">
        <Toplist />
      </Container>
    );
  }
}

export default TopMovies;
