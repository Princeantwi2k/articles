import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Movielist from "./Movielist";
import "./Homepage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=54&order=by-publication-date&api-key=dNBE8NA9rxCua5SVPjDJpqcwRPGVVdwx"
      )
      .then((movies) => {
        this.setState({
          movies: movies.data.results,
        });
      });
  }
  render() {
    return (
      <Container fluid className=" movie">
        <Movielist movies={this.state.movies} />
      </Container>
    );
  }
}

export default Homepage;
