/* @flow */
import React, { Component } from "react";
import TextList from "./TextList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component<{}> {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hi Tung, welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="App">
          <TextList />
        </div>
      </div>
    );
  }
}

export default App;
