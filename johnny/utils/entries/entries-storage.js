var fs = require('fs');
var Promise = require('bluebird');
var entriesList = require('../../temp-data/entries.json');

Promise.promisifyAll(fs);

module.exports.getEntries = function() {
  return Promise.resolve(entriesList);
};

module.exports.getEntry = function(entryId) {

  var filePath = './johnny/temp-data/' + entryId + '.json';

  return fs.readFileAsync(filePath).then(
    entry => {
      return entry;
    }
  );
};
