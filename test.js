'use strict';

require('mocha');
var assert = require('assert');
var months = require('./');

describe('months', function() {
  it('should export an array', function() {
    assert.equal(Array.isArray(months), true);
    assert.equal(months[8], 'September');
  });

  it('should have abbreviations', function() {
    assert.equal(Array.isArray(months.abbr), true);
    assert.equal(months.abbr[8], 'Sep');
  });

  it('should have Italian translations', function() {
    assert.equal(Array.isArray(months.it), true);
    assert.equal(months.it[8], 'Settembre');
    assert.equal(Array.isArray(months.abbr.it), true);
    assert.equal(months.abbr.it[8], 'Set');
  });

  it('should have German translations', function () {
    assert.equal(Array.isArray(months.de), true);
    assert.equal(months.de[8], 'September');
    assert.equal(Array.isArray(months.abbr.de), true);
    assert.equal(months.abbr.de[8], 'Sep');
  });
});
