import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <span>
        {[1, 2, 3].map(function(item, i) {
          var b = <p>Hi, {i} </p>;
          return b;
        })}
      </span>
    );
  }
}

export default App;
