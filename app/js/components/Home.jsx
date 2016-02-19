'use strict';

import React from 'react';
import StockList from '../containers/StockList';
import WeatherWidget from '../containers/WeatherWidget';

class Home extends React.Component {
  render(){
    return (
      <div id="home-content">
        <StockList />
        <WeatherWidget />
      </div>
    )
  }
}

export default Home;
