'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { TRANSACTION_MODAL } from '../consts/modal';
import StockUploadModal from '../containers/StockUploadModal';

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

  render(){
    const modal = this.props.modal == TRANSACTION_MODAL ?
      <StockUploadModal /> : null;

    const transactions = this.props.transactions.map(transaction => {
      return (
        <div></div>
      );
    });

    return (
      <div>
        {modal}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Portfolio);
