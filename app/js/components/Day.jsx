'use strict';

import React from 'react';
import moment from 'moment';
import AddModal from './AddModal';
import { addEvent } from '../actions/calendar';

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
      var events = this.props.events.filter((el) => {
        return el.date === this.props.params.day;
      });
      if(events.length){
        return events.map((el) => {
          return (
            <div key={el.anme+el.details}>
              <h3>{el.name}</h3>
              <hr/>
              <p>{el.details}</p>
            </div>
          )
        });
      }
    }
    return <p>No Events on this day.</p>;
  }

  render() {
    var date = moment(this.props.params.day, 'DDMMYYYY');
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
