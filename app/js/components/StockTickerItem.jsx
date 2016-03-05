'use strict';

import React from 'react';
import classnames from 'classnames';

class StockTickerItem extends React.Component {
  render() {
    return (
      <div className="ui small statistic">
        <div className="green value">
          ${this.props.stock.LastTradePriceOnly}  
        </div>
        <div className="label">
          <h2 className={classnames({
            'ui green sub header' : this.props.stock.Change[0] === '+',
            'ui red sub header' : this.props.stock.Change[0] === '-' })}>
            {this.props.stock.Symbol}
          </h2>
          <span>{this.props.stock.PercentChange}</span>
        </div>
      </div>
    )
  }
}

export default StockTickerItem;
