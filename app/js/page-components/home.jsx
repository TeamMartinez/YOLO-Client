'use strict';

import React from 'react';
import StockList from '../containers/StockList';

class Home extends React.Component {
  render(){
    return (
      <div>
        <p>Home</p>
        <StockList />
      </div>
    )
  }
}

export default Home;
