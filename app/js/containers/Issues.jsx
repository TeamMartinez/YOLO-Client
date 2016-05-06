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

class IssuesPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("issues mounted");
    this.props.dispatch(getIssues());
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        issues: this.props.issues,
      });
    });
    return (
      <div>

      </div>
    )
  }
}

export default connect(mapStateToProps)(IssuesPage);
