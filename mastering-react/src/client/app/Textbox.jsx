import React from 'react';

var GlyphIcon = React.createClass({
  render: function() {
    return (
      <span className={'glyphicon glyphicon-'+ this.props.icon}></span>
    );
  }
});

var ReactMixin1 = {
  update: function() {
    console.log('update ReactMixin1 ');
  },
  componentWillMount: function() {
    console.log('componentWillMount ReactMixin1 ');
  }
};

var ReactMixin2 = {
  update: function() {
    console.log('update ReactMixin2 ');
  },
  componentWillMount: function() {
    console.log('componentWillMount ReactMixin2 ');
  },
};

var Textbox = React.createClass({
  mixins: [ReactMixin2, ReactMixin1],
  getInitialState: function() {
    return {isEditing: false};
  },
  update: function() {
    console.log('update Textbox ');
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
            <button className={'btn btn-default'} onClick={this.update}><GlyphIcon icon='ok'/>Update</button>
            :
            <button className={'btn btn-default'} onClick={this.edit}><GlyphIcon icon='pencil'/>Edit</button>
        }
      </div>
    );
  }
});

export default Textbox;
