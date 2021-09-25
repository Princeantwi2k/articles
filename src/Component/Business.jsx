import React, { Component } from "react";
import axios from "axios";
import Businesslist from "./Businesslist";

class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=aXXH2xhrmG1nYlvMFPpwqgLRsZOyU8bV"
      )
      .then((name) => {
        this.setState({
          business: name.data.results,
        });
      });
  }

  render() {
    return (
      <div>
        <Businesslist business={this.state.business} />
      </div>
    );
  }
}

export default Business;
