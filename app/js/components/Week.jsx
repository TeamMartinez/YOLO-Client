'use strict';

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class Week extends React.Component {
  constructor() {
    super();

    this.checkDayForEvent = this.checkDayForEvent.bind(this);
    this.todaysEvents = this.todaysEvents.bind(this);
  }

  checkDayForEvent(day) {
    const format_day = day.format("MMDDYYYY");
    if(this.props.events.length){
      var events = this.props.events.filter((event) => {
        let event_date = moment(event.start_time, moment.ISO_8601);
        let format_event = event_date.format("MMDDYYYY");
        return format_day === format_event;
      });
      return events.length;
    }
    return 0;
  }

  todaysEvents(day) {
    var number = this.checkDayForEvent(day);
    if(number) {
      return (
        <div className="ui label right">
          <i className="certificate icon"></i>{number}
        </div>
      )
    }
    return null;
  }

  render() {
    var days = [];
    var date = this.props.date;
    var month = this.props.month;

    for (var i=0; i<7; i++) {
      var day = {
        name: date.format("ddd"),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      }
      let MMDDYYYY = date.format('MMDDYYYY');
      days.push(
        <span 
          key={day.date.toString()}
          onClick={() => window.location.href = '/#/calendar/' + MMDDYYYY}
          className={"day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")}
        >{day.number}{this.todaysEvents(date)}</span>
      );
      date = date.clone();
      date.add(1, "d");
    }
    return (
      <div className="week" key={days[0].toString()}>
        {days}
      </div>
    )
  }
}

export default Week;
