import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=T54BYK2WZWF3MRyp9FLqJvVh3z7YziYa"
      )
      .then((users) => {
        this.setState({
          post: users.data.results,
        });
      });
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        {this.state.post.map((post, indx) => (
          <div key={indx}>
            <Card>
              <img src={post.multimedia.url} alt="post" />
              <h2>abstract :{post.abstract}</h2>
              <h2>title : {post.title}</h2>
              <p>section: {post.section}</p>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default Clock;
