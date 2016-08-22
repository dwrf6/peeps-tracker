import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('make-wheel');
  this.route('add-rim');
  this.route('add-hub');
});

export default Router;
