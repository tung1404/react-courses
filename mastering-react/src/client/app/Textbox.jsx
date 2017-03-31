import React from 'react';

var Textbox = React.createClass({
  getInitialState: function() {
    return {isEditing: false};
  },
  update: function() {
    this.props.update(this.refs.messageTextbox.value);
    this.setState({isEditing: false});
  },
  edit: function() {
    this.setState({isEditing: true});
  },
  render: function() {
    return (
      <div>
        {this.props.label}
        <br/>
        <input type="text" disabled={!this.state.isEditing} ref="messageTextbox"/>
        {
          this.state.isEditing ?
            <button onClick={this.update}>Update</button>
            :
            <button onClick={this.edit}>Edit</button>
        }
      </div>
    );
  }
});

export default Textbox;
