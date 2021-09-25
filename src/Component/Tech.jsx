import React, { Component } from "react";
import Techlist from "./Techlist";
import axios from "axios";

class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=aXXH2xhrmG1nYlvMFPpwqgLRsZOyU8bV"
      )
      .then((name) => {
        this.setState({
          tech: name.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Techlist tech={this.state.tech} />
      </div>
    );
  }
}

export default Tech;
