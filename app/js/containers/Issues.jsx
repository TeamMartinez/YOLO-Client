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
    console.log("issues mounted");
    this.props.dispatch(getIssues());
  }

  render(){
    const issues = this.props.issues.map(child => {
      return (
      <div className="ui segment">processed from backend</div>

      )
      })
    return (
      <div>
        {issues}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Issues);
