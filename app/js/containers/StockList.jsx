'use strict';

import React from 'react';
import Stock from '../components/Stock';
import { connect } from 'react-redux';
import { getStocks } from '../actions/user';

function mapStateToProps(state){
  return {
    stocks: state.stock,
    user: state.user.stocks,
  }
}

class StockList extends React.Component {
  constructor() {
    super();
  }

  componentWillMount () {
    this.props.dispatch(getStocks());
  }

  render(){
    const stocks = this.props.user.map((owned, index) => {
      let stock = this.props.stocks[owned.ticker];
      if (stock) {
        return (
          <Stock
            key={stock.symbol}
            stock={stock}
            amount={owned.amount}
          />
        )
      } else {
        // good code fyi
        return <div key={"yolocoding" + index}></div>
      }
    })

    return (
      <div className="ui three stackable cards">
        {stocks}
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockList);
