'use strict';

import React from 'react';
import { Link } from 'react-router';

class Week extends React.Component {
  constructor() {
    super();

    this.checkDayForEvent = this.checkDayForEvent.bind(this);
    this.todaysEvents = this.todaysEvents.bind(this);
  }
  checkDayForEvent(day) {
    var date = day.format("DDMMYYYY");
    if(this.props.events.length){
      var events = this.props.events.reduce((el) => {
        return el.date === date;
      });
      return events.length;
    }
    return 0;
  }

  todaysEvents(day) {
    var number = this.checkDayForEvent(day);
    if(number) {
      return (
        <div className="ui label">
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
      let DDMMYYYY = date.format('DDMMYYYY');
      days.push(
        <span 
          key={day.date.toString()}
          onClick={() => window.location.href = '/#/calendar/' + DDMMYYYY}
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
