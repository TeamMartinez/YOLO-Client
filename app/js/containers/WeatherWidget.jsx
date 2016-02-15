'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { getLocaction } from '../actions/weather';

function mapStateToProps(state) {
  return {
    weather: state.weather.weather,
    location: state.weather.location
  }
}

class WeatherWidget extends React.Component {
    componentWillMount () {
      this.props.dispatch(getLocaction());
    }
    render() {
      return (
        <Weather 
          city={this.props.weather.city}
          temp={this.props.weather.temp}
          cond={this.props.weather.cond}
          icon={this.props.weather.icon}
        />
      )
    }
}

export default connect(mapStateToProps)(WeatherWidget);
