'use strict';

import React from 'react';
import { connect } from 'react-redux';
import StockTickerItem from '../components/StockTickerItem';

function mapStateToProps(state) {
  return {
    stocks: state.stock,
  }
}


class StockTicker extends React.Component {
  constructor() {
    super();
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
      Object.keys(this.props.stocks).length ?  <div className="ui fluid inverted center aligned segment stock-ticker">
        <div>{stockTickerItems}</div>
      </div> : <div></div>
    );
  }
}

export default connect(mapStateToProps)(StockTicker);
