import React, { Component } from "react";
import Sciencelist from "./Sciencelist";
import axios from "axios";

class Science extends Component {
  constructor(props) {
    super(props);
    this.state = {
      science: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=aXXH2xhrmG1nYlvMFPpwqgLRsZOyU8bV"
      )
      .then((name) => {
        this.setState({
          science: name.data.results,
        });
      });
  }
  render() {
    return (
      <div>
        <Sciencelist science={this.state.science} />
      </div>
    );
  }
}

export default Science;
