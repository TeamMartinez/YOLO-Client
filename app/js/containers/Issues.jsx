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
  }

  render(){
    const allIssues = this.props.issues.map(issue => {
      return (
        <div key={issue.id} className="ui card">
          <div className="content">
            <div className="header">{issue.title}</div>
            <div className="description">
              <a href={issue.html_url} className="ui right labeled icon basic teal button">
                <i className="github icon"></i>
                view
              </a>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div style={{paddingTop: '1%'}}>
        <h2 className="ui block header">
          <i className="github icon"></i>
          <div className="content">Your GitHub Issues</div>
        </h2>
        <div className="ui stackable centered cards">
          {allIssues}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Issues);
