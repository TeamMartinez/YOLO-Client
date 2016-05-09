'use strict';

import React from 'react';
import SearchResults from '../components/SearchResults';
import { connect } from 'react-redux';
import { getStockInfo, getStockHistory } from '../actions/stock';
import { buyStock, sellStock } from '../actions/transaction';
import { showModal, closeModal } from '../actions/modal';
import { SELL_MODAL_SEARCH, BUY_MODAL_SEARCH } from '../consts/modal';
import BuySellModal from '../components/BuySellModal';

function mapStateToProps(state) {
  return {
    stocks: state.stock,
    modal: state.modal,
  }
}

class StockSearch extends React.Component {
  constructor() {
    super();

    this.renderSearch = this.renderSearch.bind(this);
    this.search = this.search.bind(this);
    this.toggleSell = this.toggleSell.bind(this);
    this.toggleBuy = this.toggleBuy.bind(this);
    this.buy = this.buy.bind(this);
    this.sell = this.sell.bind(this);

    this.state = {
      ticker: null
    }
  }

  toggleSell() {
    if (this.props.modal) {
      this.props.dispatch(closeModal());
    } else {
      this.props.dispatch(showModal(SELL_MODAL_SEARCH));
    }
  }

  toggleBuy() {
    if (this.props.modal) {
      this.props.dispatch(closeModal());
    } else {
      this.props.dispatch(showModal(BUY_MODAL_SEARCH));
    }
  }

  buy(amount) {
    this.props.dispatch(buyStock(this.stock, amount));
    this.props.dispatch(closeModal());
  }

  sell(amount) {
    this.props.dispatch(sellStock(this.stock, amount));
    this.props.dispatch(closeModal());
  }

  search() {
    const ticker = this.refs.searchInput.value.toUpperCase();
    this.props.dispatch(getStockInfo(ticker));
    this.props.dispatch(getStockHistory(ticker));
    this.setState({ticker : ticker});
  }

  renderSearch() {
    return (
      <div className="stock-search">
        <div className="search-input ui input left floated">
          <input type="text" placeholder="Search by ticker..." ref="searchInput"/>
        </div>
        <button className="ui button icon" onClick={this.search}>
          <i className="search icon"></i>
        </button>
      </div>
    )
  }

  render() {
    const filtered = Object.keys(this.props.stocks).filter( s => {
      return s === this.state.ticker
    });
    const stock = filtered.length ? this.props.stocks[filtered[0]] : null;
    this.stock = stock;

    return (
      <div>
        {this.renderSearch()}
        {this.state.ticker ?
          <div>
            <SearchResults ticker={this.state.ticker} stock={stock}/> 
            <div onClick={this.toggleSell} className="ui basic red button">Sell</div>
            <div onClick={this.toggleBuy} className="ui basic green button">Buy</div>
          </div> :
          <div></div>}
        {this.props.modal===BUY_MODAL_SEARCH ? <BuySellModal toggle={this.toggleSell} onSubmit={this.buy} type="How many would you like to buy?" /> : null}
        {this.props.modal===SELL_MODAL_SEARCH ? <BuySellModal toggle={this.toggleBuy} onSubmit={this.sell} type="How many would you like to sell?" /> : null}
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockSearch);
