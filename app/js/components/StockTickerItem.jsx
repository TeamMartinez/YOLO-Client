'use strict';

import React from 'react';
import { format } from '../util/priceFormatter';

class StockTickerItem extends React.Component {

  render() {
    const formattedPrice =
      format(this.props.stock.LastTradePriceOnly, this.props.stock.Currency);

    return (
      <div className="ui tiny inverted statistic">
        <div className="green value">{formattedPrice}</div>
        <div className="label">
          <h2 className={this.props.stock.Change[0] === '+' ?
              'ui green sub header' : 'ui red sub header'}>
            {this.props.stock.Symbol}
          </h2>
          <span>{this.props.stock.PercentChange}</span>
        </div>
      </div>
    )
  }
}

export default StockTickerItem;
