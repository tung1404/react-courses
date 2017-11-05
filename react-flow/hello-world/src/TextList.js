/* @flow */
"use strict";
import React from "react";
import Text from "./Text";
import AddGreeter from "./AddGreeter";
import "./TextList.css";

type Props = {};
type State = { greetings: Array<string> };

class TextList extends React.Component<Props, State> {
  state: State = { greetings: [] };

  constructor(props: Props) {
    super(props);
    this.state = { greetings: ["Jim", "Sally"] };

    this.renderGreeting = this.renderGreeting.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  renderGreeting = function() {
    console.log(this.state.greetings);
    return this.state.greetings.map(name => (
      <Text key={name} ten={name} removeGreeting={this.removeGreeting} />
    ));
  };

  addGreeting = function(newName: string) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  };

  removeGreeting = function(removeName: string) {
    console.log("remove: " + removeName);
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    console.log(filteredGreetings);
    this.setState({ greetings: filteredGreetings });
  };

  render() {
    return (
      <div className="TextList">
        <AddGreeter
          addGreeting={this.addGreeting}
          removeGreeting={this.removeGreeting}
        />
        {this.renderGreeting()}
      </div>
    );
  }
}
export default TextList;
