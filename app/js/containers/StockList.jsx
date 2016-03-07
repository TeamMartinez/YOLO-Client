'use strict';

import React from 'react';
import Stock from '../components/Stock';
import { connect } from 'react-redux';
import { getStock } from '../actions/stock';

function mapStateToProps(state){
  return {
    stocks: state.stock
  }
}

class StockList extends React.Component {
  constructor() {
    super();

    this.filterStocks = this.filterStocks.bind(this);
  }

  // will return the filtered list of stocks to display on the main page
  filterStocks() {
    return Object.keys(this.props.stocks).map((symbol) => {
      // this.props.stocks_to_display.indexOf(symbol) != -1
      if(true) { 
        return symbol;
      }
    });
  }

  render(){
    // Should only show the stocks that the user has added to there home page
    const stocks = this.filterStocks().map(symbol => {
      let stock = this.props.stocks[symbol];
      return <Stock key={stock.symbol} stock={stock}/>
    })

    return (
      <div className="ui three stackable cards">
        {stocks}
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockList);
