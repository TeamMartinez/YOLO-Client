'use strict';

import React from 'react';
import moment from 'moment';
import AddModal from '../components/AddModal';
import { connect } from 'react-redux';
import { compareEvent } from '../util/sort';
import { EVENT_MODAL } from '../consts/modal';
import { showModal, closeModal } from '../actions/modal';
import { addEvent, removeEvent } from '../actions/calendar';

function mapStateToProps(store) {
  return {
    modal: store.modal,
  };
}

class Day extends React.Component {
  constructor() {
    super();

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  }

  add(event) {
    this.props.dispatch(addEvent(event));
  }

  remove(id) {
    this.props.dispatch(removeEvent(id));
  }

  toggleModal() {
    if (this.props.modal) {
      this.props.dispatch(closeModal());
    } else {
      this.props.dispatch(showModal(EVENT_MODAL));
    }
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
            <div key={event.id}>
              <h3>{event.name}</h3>
              <hr/>
              <p>@{event.location}</p>
              <p>From: {start.format('h:mm a')}</p>
              <p>To: {end.format('h:mm a')}</p>
              <div onClick={() => this.remove(event.id)} className="ui red button">Remove Event</div>
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
        {this.props.modal === EVENT_MODAL ? <AddModal toggle={this.toggleModal} onSubmit={this.add} /> : null}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Day);
