'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { closeAlert } from '../actions/alerts'

function mapStateToProps(store) {
  return {
    alert: store.alerts,
  };
}

class Alerts extends React.Component {
  constructor() {
    super();

    this.close = this.close.bind(this);
  }

  close() {
    this.props.dispatch(closeAlert());
  }

  render() {
    return this.props.alert ? 
      <div className="ui negative message">
        <i className="close icon" onClick={close}></i>
        <div className="header">{this.props.alert}</div>
      </div> : <span />
  }
}

export default connect(mapStateToProps)(Alerts);
