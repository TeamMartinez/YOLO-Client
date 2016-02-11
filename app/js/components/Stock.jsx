'use strict';

import React from 'react';

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
    return (
      <div className="content" onClick={this.toggleCollapse}>
        <div className="left floated">
          <i className={className}></i>
        </div>
        <div className="left floated">{this.props.stock.name}</div>
        <div className="right floated">${this.props.stock.lastPrice}</div>
      </div>
    )
  }

  renderCollapse() {
    return this.state.open ? 
      <div className="content">
        ${this.props.stock.change}
      </div> :
        null;
  }

  render(){
    return (
      <div className="ui card">
        {this.renderHeader()}
        {this.renderCollapse()}
      </div>
    )
  }
}

export default Stock;
