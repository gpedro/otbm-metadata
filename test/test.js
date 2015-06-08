'use strict';
var assert = require('assert');
var OTBM = require('../');

describe('otbm-metadata test', function () {
  it('parse forgotten map', function (done) {
    new OTBM(__dirname + '/fixture/forgotten.otbm', function (data) {
      assert(data.width, 1000);
      assert(data.height, 1000);
      assert(data.spawnFile, 'forgotten-spawn.xml');
      assert(data.houseFile, 'forgotten-house.xml');
      done();
    });
  });
});
