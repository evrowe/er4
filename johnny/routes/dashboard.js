var entriesStorage = require('../utils/entries/entries-storage');

module.exports.listEntries = function(req, res, next) {
  entriesStorage.getEntries()
  .then(function(entries) {
    res.status(200).send(entries);
  })
  .catch(function(error) {
    console.log('Error fetching entries');
    res.status(500).send();
  });
};
