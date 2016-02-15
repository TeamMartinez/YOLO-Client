'use strict';

import React from 'react';
import Stock from '../components/Stock';
import { connect } from 'react-redux';
import { getStock } from '../actions/stock';

function mapStateToProps(state){
  return {
    stocks: state.stocks
  }
}

class StockList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getStock("APPL"));
  }
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

export default connect(mapStateToProps)(StockList);
