'use strict';

import React from 'react';
import moment from 'moment';

class AddModal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="ui fullscreen modal transition visible active">
          <i onClick={this.props.toggle} className="close icon"></i>
          <div className="header">Add Event</div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
              </div>
              <div className="field">
                <label htmlFor="details">Details</label>
                <input id="details" name="details" type="text" />
              </div>
            </div>
          </div>
          <div className="actions">
            <div onClick={this.props.toggle} className="ui black deny button">Cancel</div>
            <div className="ui positive right button">Submit</div>
          </div>
        </div>
    )
  }
}

export default AddModal;
