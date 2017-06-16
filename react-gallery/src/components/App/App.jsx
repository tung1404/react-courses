import React, { Component } from "react";

class App extends Component {
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
