'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { TRANSACTION_MODAL } from '../consts/modal';
import StockUploadModal from '../containers/StockUploadModal';
import { getStockTransactions } from '../actions/transaction';

function mapStateToProps(store) {
  return {
    modal: store.modal,
    transactions: store.transaction,
  }
}

class Portfolio extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getStockTransactions());
  }

  render(){
    const modal = this.props.modal == TRANSACTION_MODAL ?
      <StockUploadModal /> : null;

    const transactions = this.props.transactions.map(transaction => {
      return (
        <div>
          <h2>{transaction.ticker}</h2>
          <h4>{transaction.market_value}</h4>
          <h4 style={transaction.amount > 0 ? {color: 'green'} : {color: 'red'}}>{Math.abs(transaction.amount)}</h4>
        </div>
      );
    });

    return (
      <div>
        {modal}
        {transactions}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Portfolio);
