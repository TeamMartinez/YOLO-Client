'use strict';

import React from 'react';
import Config from '../config';

class Weather extends React.Component {
    constructor() {
        super();

        this.getLocWeatherData = this.getLocWeatherData.bind(this);
        this.getRocWeatherData = this.getRocWeatherData.bind(this);
        
        this.ROC_LAT = '43.1656';
        this.ROC_LONG = '-77.6114';

        this.state = {
            city : '--',
            temp : '--',
            cond : '',
            icon : ''
        };
    }

    componentWillMount () {
        navigator.geolocation.getCurrentPosition(
          this.getLocWeatherData,
          this.getRocWeatherData);
    }

    _owmUrlBuilder (latitude, longitude) {
        var url = 'http://api.openweathermap.org/data/2.5/weather';
        url += '?lat=' + latitude + '&lon=' + longitude;
        url += '&appid=' + Config.OWM_API_KEY;
        return url;
    }

    _truncateCityName (c) {
        return c.length <= 24 ? c : c.substring(0, 22) + '...';
    }

    _kelvinToFahrenheit (k) {
        return Math.round(k * 9 / 5 - 459.67);
    }

    _getWeatherData(latitude, longitude) { 
        var url = this._owmUrlBuilder(latitude, longitude);
        let that = this;

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var r = JSON.parse(xmlHttp.responseText);
                that.setState({
                    city : that._truncateCityName(r.name),
                    temp : that._kelvinToFahrenheit(r.main.temp),
                    cond : r.weather ? r.weather[0].main : '',
                    icon : r.weather ? r.weather[0].icon : '04d'
                });
            }
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }

    getLocWeatherData(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this._getWeatherData(lat, lon);
    }

    getRocWeatherData() {
        this._getWeatherData(this.ROC_LAT, this.ROC_LONG);
    }

    render() {
        const iconUrl = this.state.icon ?
          'http://openweathermap.org/img/w/' + this.state.icon + '.png' :
          'http://openweathermap.org/img/w/04d.png';
        const conditions = this.state.cond ?  ',  ' + this.state.cond : '';

        return(
          <div className="ui card" style={{maxHeight:'65px'}}>
            <div className="content">
              <div className="right floated meta">
                <img className="left floated" src={iconUrl} />
              </div>
              <span className="header">{this.state.city}</span>
              <div className="meta">
                <span className="date">
                  {this.state.temp}℉{conditions}
                </span>
              </div>
            </div>
          </div>
        );
    }
}

export default Weather;
