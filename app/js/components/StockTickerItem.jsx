'use strict';

import React from 'react';

class StockTickerItem extends React.Component {
  render() {
    return (
      <div className="ui tiny inverted statistic">
        <div className="green value">
          ${this.props.stock.LastTradePriceOnly}  
        </div>
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
