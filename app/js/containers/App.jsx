'use strict';

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/auth';
import LogInForm from '../components/LogInForm';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(checkLogin());
  }
  
  render(){
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/calendar">Calendar</Link>
          <Link className="item" to="/portfolio">Portfolio</Link>
        </div>
        {this.props.auth ? this.props.children : <LogInForm />}
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
