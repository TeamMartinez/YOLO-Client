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
        <div className="item" style={{width: '50%'}} key={transaction.id}>
          <div className="contnt">
            <div className="header">{transaction.ticker}</div>
            <div className="description">
              <div className="left floated" style={transaction.amount < 0 ? {color: 'green'} : {color: 'red'}}>Amount: {Math.abs(transaction.amount)}</div>
              <div className="right floated">
                For: <div style={transaction.amount < 0 ? {color: 'green', display: 'inline'} : {color: 'red', display: 'inline'}}>
                  ${Math.abs(transaction.amount *transaction.market_value)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div style={{width: '80%'}} className="ui centered card">
        <div className="content">
          <div className="header">Transactions history</div>
          <div className="discription">
             <strong style={{color: 'green'}}>Bought</strong> VS. <strong style={{color: 'red'}}>Sold</strong>
          </div>
        </div>
        <div className="content">
          <div className="ui relaxed divided list">
            {transactions}
            {modal}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Portfolio);
