const findData = require('../server/dbs/find-from-db');
const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/sunset';

describe('GET /', function () {

  it('hello', function () {
    findData((result) => {
      expect(result).to.be.equal('world');
    })
  });
});