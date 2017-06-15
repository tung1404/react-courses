import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        {[1, 2, 3].map(function(item, i) {
          var b = <p>PI {i} </p>;
          return b;
        })}
      </div>
    );
  }
}

export default App;
