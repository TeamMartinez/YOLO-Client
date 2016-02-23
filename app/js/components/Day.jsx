'use strict';

import React from 'react';
import moment from 'moment';
import AddModal from './AddModal';

class Day extends React.Component {
  constructor() {
    super();

    this.renderEvents = this.renderEvents.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.submitEvent = this.submitEvent.bind(this);

    this.state = {
      modal: false
    }
  }

  submitEvent(event){
    //do somthing
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  renderEvents() {
    var date = moment(this.props.params.day, 'DDMMYYYY');
    if(this.props.events.length){
      var events = this.props.events.reduce((el) => {
        return el.date === date;
      });
      return events.map((el) => {
        return (
          <div>
            <p>{el.title}</p>
            <p>{el.details}</p>
          </div>
        )
      });
    }
    return <p>No Events on this day</p>;
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
          </div>
          <div className="extra content">
            <div className="ui green button" onClick={this.toggleModal}>Add Event</div>
          </div>
        </div>
        {this.state.modal ? <AddModal toggle={this.toggleModal} onSubmit={this.submitEvent} /> : null}
      </div>
    )
  }
}

export default Day;
