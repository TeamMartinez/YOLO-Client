'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../actions/issues';
import api from '../api_wrapper';

function mapStateToProps(store) {
  return {
    issues: store.issues
  }
}

class Issues extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getIssues());
    console.log(this.props.dispatch(getIssues()));
  }

  render(){
    const allIssues = this.props.issues.map(child => {
      return (
        <div className="ui segment compact"></div>
      )
    })
    return (
      <div>
        /{allIssues}/
      </div>
    )
  }
}

export default connect(mapStateToProps)(Issues);
