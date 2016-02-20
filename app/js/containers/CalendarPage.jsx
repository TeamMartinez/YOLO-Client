'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { addEvent, removeEvent } from '../actions/calendar';

function mapStateToProps(state) {
  return {
    events: state.calendar
  }
}

class CalendarPage extends React.Component {
  constructor() {
    super();

    this.addEvent = this.addEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }

  addEvent(event) {
    this.props.dispatch(addEvent(event));
  }

  removeEvent(index) {
    this.props.dispatch(removeEvent(index));
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        events: this.props.events,
        addEvent: this.addEvent,
        removeEvent: this.removeEvent
      });
    });
    return (
      <div>
        {childrenWithProps}
      </div>
    )
  }
}

export default connect(mapStateToProps)(CalendarPage);
