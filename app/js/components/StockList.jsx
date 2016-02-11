'use strict';

import React from 'react';
import Stock from './Stock';

class StockList extends React.Component {
  render(){
    const stocks = this.props.stocks.map(stock => {
      return (
        <Stock key={stock.symbol} stock={stock}/>
      )
    });
    return (
      <div>
        {stocks}
      </div>
    )
  }
}

export default StockList;
