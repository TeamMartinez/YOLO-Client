'use strict';

import React from 'react';
import Config from '../config';

class Weather extends React.Component {
  _truncateCityName (c) {
    return c.length <= 24 ? c : c.substring(0, 22) + '...';
  }

  _kelvinToFahrenheit (k) {
    return Math.round(k * 9 / 5 - 459.67) || '--';
  }

  render() {
    const iconUrl = this.props.icon ?
      'http://openweathermap.org/img/w/' + this.props.icon + '.png' :
      'http://openweathermap.org/img/w/04d.png';
    const conditions = this.props.cond ?  ',  ' + this.props.cond : '';
    const cityName = this._truncateCityName(this.props.city);
    const temp = this._kelvinToFahrenheit(this.props.temp);

    return(
      <div className="ui left internal attached rail">
        <div className="ui card" style={{maxHeight:'65px'}}>
          <div className="content">
            <div className="right floated meta">
              <img className="left floated" src={iconUrl} />
            </div>
            <span className="header">{cityName}</span>
            <div className="meta">
              <span className="date">
                {temp}℉{conditions}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
