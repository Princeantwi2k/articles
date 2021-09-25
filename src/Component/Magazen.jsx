import React, { Component } from "react";
import Movielist from "./Movielist";
import axios from "axios";

class Magazen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magazen: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=aXXH2xhrmG1nYlvMFPpwqgLRsZOyU8bV"
      )
      .then((name) => {
        this.setState({
          magazen: name.data.results,
        });
      });
  }
  render() {
    return (
      <div>
        <Movielist magazen={this.state.magazen} />
      </div>
    );
  }
}

export default Magazen;
