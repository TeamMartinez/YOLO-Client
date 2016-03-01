'use strict';

import React from 'react';
import { Link } from 'react-router';
import LogInForm from '../components/LogInForm';

class App extends React.Component {
  render(){
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/calendar">Calendar</Link>
          <Link className="item" to="/portfolio">Portfolio</Link>
        </div>
        {false ? this.props.children : <LogInForm />}
      </div>
    )
  }
}

export default App;
