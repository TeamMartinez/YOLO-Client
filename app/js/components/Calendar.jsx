'use strict';

import React from 'react';
import moment from 'moment';
import DayNames from './DayNames';
import Week from './Week';

class Calendar extends React.Component {
  constructor() {
    super();

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
    this.renderMonthLabel = this.renderMonthLabel.bind(this);
    this.state = {
      month: moment()
    }
  }

  previous() {
    var month = this.state.month;
    month.add(-1, "M");
    this.setState({month: month});
  }

  next() {
    var month = this.state.month;
    month.add(1, "M");
    this.setState({month: month});
  }

  renderWeeks() {
    var weeks = [],
        done = false,
        date = this.state.month.clone().startOf("month").add(-1, "w").day("Sunday"),
        monthIndex = date.month(),
        count = 0;
    while(!done) {
      weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month}/>)
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
    return weeks;
  }
  renderMonthLabel() {
    return <span>{this.state.month.format("MMMM, YYYY")}</span>;
  }
  render() {
    return (
      <div className="calendar">
        <div className="header">
          <i className="caret left icon" onClick={this.previous}></i>
          {this.renderMonthLabel()}
          <i className="caret right icon" onClick={this.next}></i>
        </div>
        <DayNames />
        {this.renderWeeks()}
      </div>
    )
  }
}

export default Calendar;
