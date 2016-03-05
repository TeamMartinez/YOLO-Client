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

  // TODO: Make the active class change depending on the page we're on
  render(){
    return (
      <div className="ui container">
        <div className="ui three item labeled icon menu">
          <Link className="green item" to="/">
            <i className="home icon"></i>
            Home
          </Link>
          <Link className="blue item" to="/calendar">
            <i className="calendar icon"></i>
            Calendar
          </Link>
          <Link className="orange item" to="/portfolio">
            <i className="line chart icon"></i>
            Portfolio
          </Link>
        </div>
        {this.props.auth ? this.props.children : <LogInForm />}
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
