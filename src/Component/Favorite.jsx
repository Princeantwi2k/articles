import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Favoritelist from "./Favoritelist";

class Favorite extends Component {
  render() {
    return (
      <Container fluid className=" movie">
        <Favoritelist />
      </Container>
    );
  }
}

export default Favorite;
