import React from 'react';
import ReactDOM from 'react-dom';
import Textbox from './Textbox.jsx';

var App = React.createClass({
  getInitialState: function() {
    return {firstName: '', lastName: ''};
  },
  updated: function(key, value) {
    var newState = {};
    newState[key] = value;
    this.setState(newState);
  },
  render: function() {
      return (
        <div>
          <p> Hello {this.state.firstName} {this.state.lastName}!</p>
          <Textbox label="First Name" update={this.updated.bind(this, 'firstName')}/>
          <br/>
          <Textbox label="Last Name" update={this.updated.bind(this, 'lastName')}/>
        </div>
      );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
