/* @flow */
"use strict";
import React, { Component } from "react";
import SyntheticInputEvent from "react/";
import "./AddGreeter.css";
import { Props, State } from "./types";

class AddGreeter extends Component<Props, State> {
  props = { addGreeting: function(v: string) {} };
  state = { greetingName: "" };

  constructor(props: Props) {
    super(props);
    this.state = { greetingName: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }

  handleUpdate = function(e: Event) {
    var target = e.target;
    var text = "";
    if (target instanceof HTMLInputElement) {
      text = target.value;
    }
    return this.handleTextUpdate(text);
  };

  handleTextUpdate(v: string) {
    this.setState({ greetingName: v });
  }

  addGreeting = function() {
    this.props.addGreeting(this.state.greetingName);
    // this.setState({ greetingName: "" });
  };

  render() {
    return (
      <div className="AddGreeter">
        <input type="text" onChange={this.handleUpdate} />
        &nbsp;&nbsp;
        <button onClick={this.addGreeting}>Add</button>
      </div>
    );
  }
}

export default AddGreeter;
