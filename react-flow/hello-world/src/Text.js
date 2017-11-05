/* @flow */
import React from "react";
import "./Text.css";

type Props = { ten: string, removeGreeting: (name: string) => void };
type State = { name: string };

class Text extends React.Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = { name: props.ten };
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  removeGreeting = function() {
    this.props.removeGreeting(this.props.ten);
  };

  render() {
    return (
      <div className="Text">
        Hi, {this.state.name}!
        <br />
        <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }
}

export default Text;
