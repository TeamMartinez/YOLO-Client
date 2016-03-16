'use strict';

import React from 'react';
import { format } from '../util/priceFormatter';

class Stock extends React.Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.renderCollapse = this.renderCollapse.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      open: false
    }
  }

  toggleCollapse() {
    this.setState({
      open: !this.state.open
    });
  }

  renderHeader() {
    const className = this.state.open ? "caret down icon" : "caret right icon";
    const formattedPrice =
      format(this.props.stock.LastTradePriceOnly, this.props.stock.Currency);

    return (
      <div className="content" onClick={this.toggleCollapse}>
        <div className="left floated">
          <i className={className}></i>
        </div>
        <div className="left floated">{this.props.stock.Name}</div>
        <div className="right floated">{formattedPrice}</div>
      </div>
    )
  }

  renderCollapse() {
    return this.state.open ? 
      <div className="content">
        {this.props.stock.PercentChange}
      </div> :
        null;
  }

  render(){
    return (
      <div className="ui card">
        {this.renderHeader()}
        {this.renderCollapse()}
        <div className="extra content">
          <div className="ui two small buttons">
            <div className="ui basic red button">Sell</div>
            <div className="ui basic green button">Buy</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock;
