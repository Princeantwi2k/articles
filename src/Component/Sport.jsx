import React, { Component } from "react";
import Sportlist from "./Sportlist";
import axios from "axios";

class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=aXXH2xhrmG1nYlvMFPpwqgLRsZOyU8bV"
      )
      .then((name) => {
        this.setState({
          sport: name.data.results,
        });
      });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Sportlist sport={this.state.sport} />
      </div>
    );
  }
}

export default Sport;
