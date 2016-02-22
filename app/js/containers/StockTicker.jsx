'use strict';

import React from 'react';
import { connect } from 'react-redux';
import StockTickerItem from '../components/StockTickerItem';
import { getStocks } from '../actions/stock';

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  }
}

class StockTicker extends React.Component {
  constructor() {
    super();

    this.state = {
      tickers : [
        'AAPL',
        'MSFT',
        'TSLA',
        'CMRX'
      ]
    };
  }

  componentWillMount () {
    this.props.dispatch(getStocks(this.state.tickers));
  }

  render() {
    const stockTickerItems = Object.keys(this.props.stocks).map(t => {
      let s = this.props.stocks[t];
      return <StockTickerItem key={s.symbol} stock={s} />
    })

    return (
      <div className="ui card stock-ticker">
        <marquee>{stockTickerItems}</marquee>
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockTicker);