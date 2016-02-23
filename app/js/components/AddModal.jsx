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
      location: this.refs.location.value,
      start_time: this.refs.start_time.value,
      end_time: this.refs.end_time.value
    }
    this.props.onSubmit(event);
    window.location.href = "/#/calendar/";
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
                <label htmlFor="location">Location</label>
                <input ref="location" id="location" name="location" type="text" />
              </div>
              <div className="field">
                <label htmlFor="start_time">Start Time</label>
                <input ref="start_time" id="start_time" name="start_time" type="datetime-local" />
              </div>
              <div className="field">
                <label htmlFor="end_time">End Time</label>
                <input ref="end_time" id="end_time" name="end_time" type="datetime-local" />
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
