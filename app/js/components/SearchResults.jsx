'use strict';

import React from 'react';

class SearchResults extends React.Component {

  render() {
    return this.props.stock == null ? <div>--</div> : (
      <div>{this.props.stock.Name}</div>
    )
  }

}

export default SearchResults;