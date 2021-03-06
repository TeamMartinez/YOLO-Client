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
  MONTH: h => h.slice(0, 25),
  WEEK: h => h.slice(0, 7),
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
    let change;
    if (this.props.stock.Change) {
      if (this.props.stock.Change[0] === '+') {
        change = (
          <span className='sr-change-positive'>({this.props.stock.PercentChange})</span>
        );
      } else {
        change = (
          <span className='sr-change-negative'>({this.props.stock.PercentChange})</span>
        );
      }
    } else {
      change = (
        <span className="sr-change-positive">(0%)</span>
      );
    }

    return (
      <div className="six wide column left aligned sr-stock-info">

        <div className="ui header">
          {this.props.stock.Name} ({this.props.stock.Symbol})
        </div>

        <span className="sr-current-price">
          <span>
            Current price: {format(this.props.stock.LastTradePriceOnly)}
          </span>
        </span>
        {change}
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

    const yearClass = (this.state.duration === DURATIONS.YEAR) ?
      'ui active button' : 'ui button';
    const monthClass = (this.state.duration === DURATIONS.MONTH) ?
      'ui active button' : 'ui button';
    const weekClass = (this.state.duration === DURATIONS.WEEK) ?
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
