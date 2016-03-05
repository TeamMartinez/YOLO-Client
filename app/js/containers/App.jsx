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
  constructor() {
    super();

    this.getLinkClasses = this.getLinkClasses.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(checkLogin());
  }

  getLinkClasses() {
    const current_page = this.props.location.pathname;
    const classNames = {
      home: "green item",
      calendar: "blue item",
      portfolio: "orange item"
    }
    if(current_page.indexOf("calendar") !== -1) {
      classNames.calendar = "active blue item";
    } else if(current_page.indexOf("portfolio") !== -1) {
      classNames.portfolio = "active orange item";
    } else {
      classNames.home = "active green item";
    }
    return classNames;
  }

  render(){
    const classNames = this.getLinkClasses();
    return (
      <div className="ui container">
        <div className="ui three item labeled icon menu">
          <Link className={classNames.home} to="/">
            <i className="home icon"></i>
            Home
          </Link>
          <Link className={classNames.calendar} to="/calendar">
            <i className="calendar icon"></i>
            Calendar
          </Link>
          <Link className={classNames.portfolio} to="/portfolio">
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
