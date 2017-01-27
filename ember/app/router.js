import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events', { path: '/', resetNamespace: true }, function() {
    this.route('new', { path: 'events/new' });
  });
  this.route('event', { path: 'event/:slug' });
  this.route('hourglass');
});

export default Router;
