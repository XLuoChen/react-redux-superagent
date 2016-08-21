const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/sunset';

function findData(callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('hello');
    collection.find({}).toArray(function (err, result) {
      callback(result[0].hello);
    });
  });
}

module.exports = findData;