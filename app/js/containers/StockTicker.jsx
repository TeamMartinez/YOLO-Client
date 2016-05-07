'use strict';

import React from 'react';
import { connect } from 'react-redux';
import StockTickerItem from '../components/StockTickerItem';
import { getStocks } from '../actions/stock';

function mapStateToProps(state) {
  return {
    stocks: state.stock
  }
}

// This should be pulled from the API
const INITIAL_DATA = ['AAPL', 'MSFT', 'TSLA', 'NFLX', 'AMZN', 'GOOG'];

class StockTicker extends React.Component {

  componentWillMount () {
    this.props.dispatch(getStocks(INITIAL_DATA));
  }

  render() {
    const stockTickerItems = Object.keys(this.props.stocks).map(t => {
      let s = this.props.stocks[t];
      return (
        <StockTickerItem
          key={s.symbol}
          stock={s}
        />
      )
    })

    return (
      <div className="ui fluid inverted center aligned segment stock-ticker">
        <div>{stockTickerItems}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockTicker);
