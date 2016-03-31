import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // About Page
  this.route('about');

  // Journal Home
  this.route('journal', function() {

    // Individual Journal Entries
    this.route('entry', {
      path: 'entry/:entry_id'
    });
  });
  this.route('contact');
});

export default Router;
