'use strict';

import React from 'react';

class CalendarPage extends React.Component {
  render(){
    return (
      <div>
        <p>Calendar</p>
        {this.props.children}
      </div>
    )
  }
}

export default CalendarPage;
