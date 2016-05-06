'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/issues';

function mapStateToProps(store) {
  return {
    events: store.calendar
  }
}

class CalendarPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("swag");
    this.props.dispatch(getEvents());
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        events: this.props.events,
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
