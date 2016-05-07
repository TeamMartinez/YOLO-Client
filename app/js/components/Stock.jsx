'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { format } from '../util/priceFormatter';
import { buyStock, sellStock } from '../actions/transaction';
import { showModal, closeModal } from '../actions/modal';
import { SELL_MODAL, BUY_MODAL } from '../consts/modal';
import BuySellModal from '../components/BuySellModal';

function mapStateToProps(state){
  return {
    modal: state.modal,
  }
}

class Stock extends React.Component {
  constructor() {
    super();

    this.buy= this.buy.bind(this);
    this.sell= this.sell.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.toggleSell = this.toggleSell.bind(this);
    this.toggleBuy = this.toggleBuy.bind(this);
  }

  toggleSell() {
    if (this.props.modal) {
      this.props.dispatch(closeModal());
    } else {
      this.props.dispatch(showModal(SELL_MODAL));
    }
  }

  toggleBuy() {
    if (this.props.modal) {
      this.props.dispatch(closeModal());
    } else {
      this.props.dispatch(showModal(BUY_MODAL));
    }
  }

  buy(amount) {
    this.props.dispatch(buyStock(this.props.stock, amount));
    this.props.dispatch(closeModal());
  }

  sell(amount) {
    this.props.dispatch(sellStock(this.props.stock, amount));
    this.props.dispatch(closeModal());
  }

  renderHeader() {
    const formattedPrice =
      format(this.props.stock.LastTradePriceOnly, this.props.stock.Currency);

    return (
      <div className="content" onClick={this.toggleCollapse}>
        <div className="left floated">{this.props.stock.Name}</div>
        <div className="left floated" style={{paddingLeft: '3%'}}>{this.props.stock.PercentChange}</div>
        <div className="right floated">{formattedPrice}</div>
      </div>
    )
  }

  render(){
    return (
      <div className="ui card">
        {this.renderHeader()}
        <div className="extra content">
          <div className="ui two small buttons">
            <div onClick={this.toggleSell} className="ui basic red button">Sell</div>
            <div onClick={this.toggleBuy} className="ui basic green button">Buy</div>
          </div>
        </div>
        {this.props.modal===BUY_MODAL ? <BuySellModal toggle={this.toggleSell} onSubmit={this.buy} type="How many would you like to buy?" /> : null}
        {this.props.modal===SELL_MODAL ? <BuySellModal toggle={this.toggleBuy} onSubmit={this.sell} type="How many would you like to sell?" /> : null}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Stock);
