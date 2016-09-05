const Bookshelf = require('../../db').Bookshelf;

// Define entry model and methods
// @NOTE: Methods may need to be abstracted out to a base class for future use
// in the event that I start adding more models to the DB
const Entry = Bookshelf.Model.extend(

  // Properties
  // ---------------------------------------------------------------------------
  {
    tableName: 'journal'
  },
  // Methods
  // ---------------------------------------------------------------------------
  {
    // Retrieve all records
    findAll(options) {
      return this.forge().fetchAll(options);
    },

    // Retrieve one record
    findOne(data, options) {
      return this.forge(data).fetch(options);
    },

    // Add a new record
    add(data) {
      return Bookshelf.transaction(t => {
        return this.forge(data).save(null, {
          method: 'insert',
          transacting: t
        });
      });
    },

    // Update an existing record
    update(slug, data) {
      return Bookshelf.transaction(t => {
        return this.forge({ slug }).save(data, {
          method: 'update',
          patch: true,
          transacting: t
        });
      });
    },

    // Looks up an entry by ID and destroys it
    destroy(slug) {
      return this.forge({ slug }).fetch().then(entry => entry.destroy());
    }
  }
);

module.exports = {
  Entry: Bookshelf.model('Entry', Entry)
};
