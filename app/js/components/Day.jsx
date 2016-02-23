'use strict';

import React from 'react';
import moment from 'moment';
import AddModal from './AddModal';
import { addEvent } from '../actions/calendar';
import { compareEvent } from '../util/sort';

class Day extends React.Component {
  constructor() {
    super();

    this.renderEvents = this.renderEvents.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modal: false
    }
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  renderEvents() {
    if(this.props.events.length){
      var events = this.props.events.filter((event) => {
        let date = moment(event.start_time, moment.ISO_8601);
        return date.format("MMDDYYYY") === this.props.params.day;
      });
      if(events.length){
        events = events.sort(compareEvent);
        return events.map((event) => {
          let start = moment(event.start_time, moment.ISO_8601);
          let end = moment(event.end_time, moment.ISO_8601);
          return (
            <div key={event.name+event.location}>
              <h3>{event.name}</h3>
              <hr/>
              <p>@{event.location}</p>
              <p>From: {start.format('h:mm a')}</p>
              <p>To: {end.format('h:mm a')}</p>
            </div>
          )
        });
      }
    }
    return <p>No Events on this day.</p>;
  }

  render() {
    var date = moment(this.props.params.day, 'MMDDYYYY');
    return (
      <div>
        <div className="ui card">
          <div className="content">
            <div className="header">{date.format('MMMM Do YYYY')}</div>
          </div>
          <div className="content">
            {this.renderEvents()}
          </div>
          <div className="extra content">
            <div className="ui green button" onClick={this.toggleModal}>Add Event</div>
          </div>
        </div>
        {this.state.modal ? <AddModal toggle={this.toggleModal} onSubmit={this.props.addEvent} /> : null}
      </div>
    )
  }
}

export default Day;
