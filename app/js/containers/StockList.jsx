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
  render(){
    const stocks = Object.keys(this.props.stocks).map(t => {
      let s = this.props.stocks[t];
      return <Stock key={s.symbol} stock={s}/>
    })

    return (
      <div className="ui three stackable cards">
        {stocks}
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockList);
