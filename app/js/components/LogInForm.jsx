'use strict';

import React from 'react';

class LogInForm extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <div style={{textAlign: "center"}}>
          <img src="http://www.molecularecologist.com/wp-content/uploads/2013/11/github-logo.jpg" />
        </div>
        <div style={{textAlign: "center"}}>
          <a className="massive ui primary button" href="/auth/github">Login</a>
        </div>
      </div>
    )
  }
}

export default LogInForm;
