'use strict';

import React from 'react';
import StockList from '../containers/StockList';
import WeatherWidget from '../containers/WeatherWidget';
import StockTicker from '../containers/StockTicker';
import StockSearch from '../containers/StockSearch';
import Issues from '../containers/Issues';
import Money from '../containers/Money';

class Home extends React.Component {
  render(){
    return (
      <div>
        <StockTicker />
        <div className="main-content ui raised green segment center aligned">
          <h1 className="ui icon header">
            <i className="circular blue gift icon"></i>
            <div className="content">
              Martinez Candy Bag
              <div className="sub header">A place to manage all sorts of <b>sweet</b> stuff.</div>
            </div>
          </h1>

          <WeatherWidget />
          <Money />
          <StockSearch />
        </div>

        <StockList />
        <Issues />
      </div>
    )
  }
}

export default Home;
