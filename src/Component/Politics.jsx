import React, { Component } from "react";
import Politicslist from "./Politicslist";
import axios from "axios";

class Politics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      politics: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=aXXH2xhrmG1nYlvMFPpwqgLRsZOyU8bV"
      )
      .then((name) => {
        this.setState({
          politics: name.data.results,
        });
      });
  }
  render() {
    return (
      <div>
        <Politicslist politics={this.state.politics} />
      </div>
    );
  }
}

export default Politics;
