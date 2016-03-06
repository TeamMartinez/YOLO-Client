'use strict';

import React from 'react';
import SearchResults from '../components/SearchResults';
import { connect } from 'react-redux';
import { getStock } from '../actions/stock';

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
    this.setState({ticker : ticker});
  }

  renderSearch() {
    return (
      <div>
        <div className="ui input left floated">
          <input type="text" placeholder="Search stocks..." ref="searchInput"/>
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
        <SearchResults stock={stock}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(StockSearch);