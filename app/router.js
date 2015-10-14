import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', {});
  this.route('activity', { path: '/activity/:activity_id' });
});

export default Router;
