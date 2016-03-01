'use strict';

import React from 'react';

class LogInForm extends React.Component {
  render() {
    return (
      <div>
        <h2 className="ui header">Log in with git hub</h2>
        <img src="http://www.molecularecologist.com/wp-content/uploads/2013/11/github-logo.jpg" />
        <a className="ui primary button" href="/api/auth/github">Login</a>
      </div>
    )
  }
}

export default LogInForm;
