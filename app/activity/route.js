import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {id: params.activity_id};
  }
});
