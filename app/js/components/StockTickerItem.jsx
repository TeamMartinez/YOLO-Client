'use strict';

import React from 'react';
import classnames from 'classnames';

class StockTickerItem extends React.Component {

  render() {
    return (
      <div className="stock-ticker-item">
        <span className="sti-symbol">{this.props.stock.Symbol}:</span>
        <span className="sti-price">{this.props.stock.LastTradePriceOnly}</span>
        <span className={classnames({
          'sti-change-positive' : this.props.stock.Change[0] === '+',
          'sti-change-negative' : this.props.stock.Change[0] === '-'
        })}>
          ({this.props.stock.PercentChange})
        </span>
      </div>
    )
  }

}

export default StockTickerItem;