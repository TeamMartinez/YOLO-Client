'use strict';

import React from 'react';

class BuySellModal extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.onSubmit(this.refs.amount.value);
  }

  render() {
    return (
        <div className="ui modal transition visible active">
          <i onClick={this.props.toggle} className="close icon"></i>
          <div className="header">{this.props.type}</div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <label htmlFor="name">Amount</label>
                <input ref="amount" id="amount" name="amount" type="text" />
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

export default BuySellModal;

