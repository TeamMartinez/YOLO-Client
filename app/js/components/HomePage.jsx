'use strict';

import React from 'react';
import StockList from '../containers/StockList';
import WeatherWidget from '../containers/WeatherWidget';
import StockTicker from '../containers/StockTicker';

class Home extends React.Component {
  render(){
    return (
      <div> 
        <div className="ui raised green segment center aligned">
          <h1 className="ui icon header">
            <i className="circular blue gift icon"></i>
            <div className="content">
              Martinez Candy Bag
              <div className="sub header">A place to manage all sorts of <b>sweet</b> stuff.</div>
            </div>
          </h1>

          <WeatherWidget />
          <StockList />
        </div>
        <StockTicker />
      </div>
    )
  }
}

export default Home;
