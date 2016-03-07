'use strict';

import React from 'react';
import SearchResults from '../components/SearchResults';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getStock, getStockHistory } from '../actions/stock';

function mapStateToProps(state) {
  return {
    stocks: state.stock
  }
}

class StockSearch extends React.Component {
  constructor() {
    super();

    this.renderSearch = this.renderSearch.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      ticker: null
    }
  }

  search() {
    const ticker = this.refs.searchInput.value.toUpperCase();
    this.props.dispatch(getStock(ticker));
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

    return (
      <div>
        {this.renderSearch()}
        {(this.state.ticker) ?
          <SearchResults ticker={this.state.ticker} stock={stock}/> :
          <div></div>}
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockSearch);