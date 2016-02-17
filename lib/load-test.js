'use strict';

/**
 * Main Constructor
 * @param {Object} state
 */
function LoadTest(state) {
    this._method = state.method;
    this._contentType = state.contentType;
    this._header = state.header;
    this._body = state.body;
    this._endpoint = state.endpoint;
    this._requests = state.requests;
    this._concurrency = state.concurrency;
}

module.exports = LoadTest;
