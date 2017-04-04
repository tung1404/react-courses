import React from 'react';
import ReactDOM from 'react-dom';
import Textbox from './Textbox.jsx';

var InputTextBox = React.createClass({
  render: function () {
    return < input
    type = "text"
    name = {
      this.props.name
    }
    value = {
      this.props.value
    }
    onChange = {
      this.props.onChange
    } />
}
});

var TypingForm = React.createClass({
getInitialState: function () {
  return {
    form: {
      first: 'a',
      last: 'b'
    }
  };
},
onChange: function (event) {
  this.state.form[event.target.name] = event.target.value;
  this.setState({form: this.state.form});
},
render: function () {
  var self = this;
  return (
    <form>
      <InputTextBox
        name='first'
        value={this.state.form.first}
        onChange={this.onChange}/>
      <br/>
      <InputTextBox
        name='last'
        value={this.state.form.last}
        onChange={this.onChange}/>
    </form >
  );
}
});

var App = React.createClass({
getInitialState: function () {
  return {firstName: '', lastName: ''};
},
updated: function (key, value) {
  var newState = {};
  newState[key] = value;
  this.setState(newState);
},
render: function () {
  return (
    <div>
      <TypingForm/>
      <p>
        Hello {this.state.firstName}
        {this.state.lastName}
        !
      </p>
    </div>
  );
}
});

ReactDOM.render(< App />, document.getElementById('app'));
