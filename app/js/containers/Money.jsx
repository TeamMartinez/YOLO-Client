'use strict';

import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(store) {
  return {
    amount: store.user.amount,
  }
}

class Money extends React.Component {
  render() {
    return (
      <div className="ui right internal attached rail">
        <div className="ui card" style={{maxHeight:'65px'}}>
          <div className="content">
            <span className="header">Acount Balance</span>
            <div className="meta">
              <span className="date">
                ${this.props.amount}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Money);

