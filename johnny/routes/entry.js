var entriesStorage = require('../utils/entries/entries-storage');

/**
 * Handle fetching all entries
 * @method function
 * @param {[type]} req [description]
 * @param {[type]} res [description]
 * @param {Function} next [description]
 * @return {[type]}
 */
module.exports.getEntries = function(req, res, next) {
  entriesStorage.getEntries()
  .then(function(entries) {
    res.status(200).send(entries);
  })
  .catch(function(error) {
    console.log('Error fetching entries');
    res.status(500).send();
  });
};

module.exports.getEntry = function(req, res, next) {
  entriesStorage.getEntry(req.params.entryId)
  .then(function(entry) {
    res.status(200).send(entry);
  })
  .catch(function(error) {
    console.log('Error fetching single entry');
    res.status(500).send();
  });
};
