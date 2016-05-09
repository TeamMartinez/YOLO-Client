'use strict';

import React from 'react';
import moment from 'moment';
import { LineChart } from 'react-d3';
import { formatter } from '../util/priceFormatter';

const DURATIONS = {
  YEAR: 'YEAR',
  MONTH: 'MONTH',
  WEEK: 'WEEK',
};

const historySlicers = {
  YEAR: h => h,
  MONTH: h => h.slice(h.length - 25),
  WEEK: h => h.slice(h.length - 7),
};

class SearchResults extends React.Component {

  constructor() {
    super();

    this.renderStockInfo = this.renderStockInfo.bind(this);
    this.renderStockGraph = this.renderStockGraph.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.renderNoStocksFound = this.renderNoStocksFound.bind(this);

    this.state = {
      duration: DURATIONS.YEAR,
    }
  }

  renderStockInfo() {
    const format = formatter(this.props.stock.Currency);

    return (
      <div className="six wide column left aligned sr-stock-info">

        <div className="ui header">
          {this.props.stock.Name} ({this.props.stock.Symbol})
        </div>

        <div className="sr-current-price">
          <span>
            Current price: {format(this.props.stock.LastTradePriceOnly)}
          </span>
          <span className={this.props.stock.Change[0] === '+' ?
              'sr-change-positive' : 'sr-change-negative'}>
            ({this.props.stock.PercentChange})
          </span>
        </div>

        <div className="sr-info-field">
          Day's high: {format(this.props.stock.DaysHigh)}
        </div>

        <div className="sr-info-field">
          Day's low: {format(this.props.stock.DaysLow)}
        </div>

        <div className="sr-info-field">
          Yearly high: {format(this.props.stock.YearHigh)}
        </div>

        <div className="sr-info-field">
          Yearly low: {format(this.props.stock.YearLow)}
        </div>

        <div className="sr-info-field">
          Average Volume: {this.props.stock.AverageDailyVolume} trades
        </div>

      </div>
    )
  }

  switchDuration(duration) {
    this.setState({duration});
  }

  xAxisFormatter() {
    if (this.state.duration === DURATIONS.YEAR) {
      return (t) => moment(t).format(t.getMonth() === 0 ? 'YYYY' : 'MMM');
    } else if (this.state.duration === DURATIONS.MONTH) {
      return (t) => moment(t).format(t.getDate() === 1 ? 'MMM' : 'Do');
    } else {
      return (t) => moment(t).format('ddd');
    }
  }

  renderStockGraph() {
    const lineData = [{
      name: 'Closing Price',
      values: historySlicers[this.state.duration](this.props.stock.History),
      strokeWidth: 1
    }];

    const yearClass = (this.state.DURATION === DURATIONS.YEAR) ?
      'ui active button' : 'ui button';
    const monthClass = (this.state.DURATION === DURATIONS.MONTH) ?
      'ui active button' : 'ui button';
    const weekClass = (this.state.DURATION === DURATIONS.WEEK) ?
      'ui active button' : 'ui button';

    return (
      <div className="ten wide column">
        <div className="ui buttons">
          <button onClick={() => this.switchDuration(DURATIONS.YEAR)} className={yearClass}>Year</button>
          <button onClick={() => this.switchDuration(DURATIONS.MONTH)} className={monthClass}>Month</button>
          <button onClick={() => this.switchDuration(DURATIONS.WEEK)} className={weekClass}>Week</button>
        </div>
        <LineChart
          legend={false}
          data={lineData}
          width='95%'
          height={250}
          hoverAnimation={true}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 800,
            height: 300
          }}
          yAxisLabel="Closing Price"
          xAxisFormatter={this.xAxisFormatter()}
          gridHorizontal={true}
        />
      </div>
    )
  }

  renderResults() {
    const stockLoaded = !!this.props.stock;
    const historyLoaded = stockLoaded && !!this.props.stock.History;

    return (
      <div className="ui two column stackable grid">
        {!stockLoaded ? <div></div> : this.renderStockInfo()}
        {!historyLoaded ? <div></div> : this.renderStockGraph()}
      </div>
    )
  }

  renderNoStocksFound() {
    return (
      <div className="ui red message">
        No stocks found for ticker {this.props.ticker}
      </div>
    )
  }

  render() {
    const stockExists = this.props.stock !== null;

    return (
      <div className="ui container search-results">
        <div className="ui segment">
          {stockExists ? this.renderResults() : this.renderNoStocksFound()}
        </div>
      </div>
    )
  }

}

export default SearchResults;