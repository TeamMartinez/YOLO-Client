'use strict';

class API {
  constructor(core, resource) {
    this.core = core;
    this.resource = resource;

    this.all = this.all.bind(this);
    this.one = this.one.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.destory = this.destory.bind(this);
  }

  all() {
    return this.core.get(this.resource);
  }

  one(id) {
    return this.core.get(this.resource + '/' + id);
  }

  create(body) {
    return this.core.post(this.resource, body);
  }

  update(id, body) {
    return this.core.put(this.resource + '/' + id, body);
  }

  destory(id) {
    return this.core.del(this.resource + '/' + id);
  }
}

export default API;
