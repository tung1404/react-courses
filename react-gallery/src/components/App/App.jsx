// @flow
import React, { Component } from "react";

type Comment = {
  author: string,
  body: string,
};

class App extends Component {
  state: { comments: Array<Comment> };
  constructor() {
    super();
    this.state = { comments: [] };
  }
  componentDidMount() {
    fetchSomeComments(comments => {
      this.setState({ comments: comments });
    });
  }
  render() {
    return (
      <ul>
        {this.state.comments.map(c => {
          var b = <ul>{c.author}: {c.body}</ul>;
          return b;
        })}
      </ul>
    );
  }
}

const fetchSomeComments = cb =>
  cb([
    { author: "Chan", body: "You look nice today." },
    { author: "You", body: "I know, right?!" }
  ]);

export default App;
