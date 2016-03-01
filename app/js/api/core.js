'use strict';

import fetch from 'isomorphic-fetch';
import url from 'url';

function reject(val) {
  // helper function that just throws errors
  throw new Error(val);
}

function status(resp) {
  if(resp.status >= 200 && resp.status < 300) {
    return Promise.resolve(resp);
  }
  return resp.json().then((data, err) => {
    if(err) {
      // send text if there is no json
      return resp.text().then(reject);
    }
    // send error
    reject(data.error);
  });
}

function json(resp) {
  if(resp.status === 204) {
    return Promise.resolve({});
  }
  return resp.json();
}

class Core {
  constructor(apiRoot) {
    this.apiRoot = apiRoot;

    this.request = this.request.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.del = this.del.bind(this);
  }

  request(resource, method, body) {
    return fetch(url.resolve(this.apiRoot, resource), {
      method: method,
      headers: {
        Accept: 'appliction/json',
        'Content-Type': 'appliction/json'
      },
      body: JSON.stringify(body)
    })
    .then(status)
    .then(json)
  }

  get(resource) {
    return this.request(resource, 'get');
  }

  post(resource, body) {
    return this.request(resource, 'post', body);
  }

  put(resource, body) {
    return this.request(resource, 'put', body);
  }

  del(resource) {
    return this.request(resource, 'delete');
  }
}

export default Core;
