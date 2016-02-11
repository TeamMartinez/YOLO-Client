'use strict';

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render(){
    return (
      <div>
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/calendar">Calendar</Link>
          <Link className="item" to="/portfolio">Portfolio</Link>
        </div>
        <div className="ui mian container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
