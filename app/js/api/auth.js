'use strict';

export default class Auth {
  constructor(core) {
    this.core = core;

    this.check = this.check.bind(this);
  }

  check() {
    return this.core.get('/auth/verify').then((json) => {
      return Promise.resolve(json.authenticated);
    });
  }
}
