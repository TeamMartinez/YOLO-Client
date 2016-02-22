'use strict';

import React from 'react';
import StockList from '../containers/StockList';
import WeatherWidget from '../containers/WeatherWidget';
import StockTicker from '../containers/StockTicker';

class Home extends React.Component {
  render(){
    return (
      <div id="home-content">
        <WeatherWidget />
        <StockTicker />
        <StockList />
      </div>
    )
  }
}

export default Home;
