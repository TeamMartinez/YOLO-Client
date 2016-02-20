'use strict';

import React from 'react';

class CalendarPage extends React.Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default CalendarPage;
