'use strict';

import React from 'react';
import moment from 'moment';

class AddModal extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const event = {
      name: this.refs.name.value,
      details: this.refs.details.value,
      date: this.refs.date.value,
      time: this.refs.time.value
    }
    this.props.onSubmit(event);
    this.props.toggle();
  }

  render() {
    const divStyle = {
      top: '20%'
    }
    return (
        <div className="ui modal transition visible active" style={divStyle}>
          <i onClick={this.props.toggle} className="close icon"></i>
          <div className="header">Add Event</div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input ref="name" id="name" name="name" type="text" />
              </div>
              <div className="field">
                <label htmlFor="details">Details</label>
                <input ref="details" id="details" name="details" type="text" />
              </div>
              <div className="field">
                <label htmlFor="date">Date</label>
                <input ref="date" id="date" name="date" type="text" />
              </div>
              <div className="field">
                <label htmlFor="time">Time</label>
                <input ref="time" id="time" name="time" type="text" />
              </div>
            </div>
          </div>
          <div className="actions">
            <div onClick={this.props.toggle} className="ui black deny button">Cancel</div>
            <div onClick={this.onSubmit} className="ui positive right button">Submit</div>
          </div>
        </div>
    )
  }
}

export default AddModal;
