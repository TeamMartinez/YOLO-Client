'use strict'; 

import core from './core';
import api from './api';
import auth from './auth';

class APIRoot {
  constructor(root) {
    const Core = new core(root);
    const API = api.bind(null, Core);

    this.Auth = new auth(Core);
    this.Events = new API("calendar_events");
    this.StockNotes = new API("stock_notes");
    this.StockSummaries = new API("stock_sumaries");
    this.Transactions = new API("stock_transactions");
    this.Issues = new API("api/github_issues");
  }
}

export default APIRoot;
