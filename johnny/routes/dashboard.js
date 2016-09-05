const Bookshelf = require('../../db').Bookshelf;
const Entry = Bookshelf.model('Entry');

exports.listEntries = function(req, res, next) {
  Entry.findAll()
    .then(entries => {
      res.json(entries.toJSON());
    })
    .catch(error => {
      console.info('Error fetching entries');
      res.status(404).send();
    });
};

exports.getEntry = function(req, res, next) {
  Entry.findOne({ slug: req.params.entryId })
    .then(entry => {
      res.json(entry.toJSON());
    })
    .catch(error => {
      console.info(`Entry with slug ${req.params.entryId} not found.`);
      res.status(404).send();
    });
};

exports.newEntry = function(req, res, next) {
  Entry.add(req.body)
    .then(entry => {
      res.json(entry.toJSON());
    })
    .catch(error => {
      console.info(`Error saving new entry with slug ${req.body.slug}`);
      res.status(422).send();
    });
};

exports.updateEntry = function(req, res, next) {
  const slug = req.params.slug;

  Entry.update(slug, req.body)
    .then(entry => {
      res.json(entry.toJSON());
    })
    .catch(error => {
      res.status(422).send();
    });
};

exports.deleteEntry = function(req, res, next) {
  const slug = req.params.slug;

  Entry.destroy(slug)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      res.status(422).send();
    });
};
