'use strict';

import React from 'react';
import StockList from '../components/StockList';
import { connect } from 'react-redux';
import { getStock } from '../actions/stock';

function mapStateToProps(state){
  return {
    stocks: state.stocks
  }
}

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getStock("APPL"));
  }
  render(){
    return (
      <div>
        <p>Home</p>
        <StockList stocks={this.props.stocks}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home);
