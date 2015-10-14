import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    alert(`Activity ${this.get('activity-id')} clicked.`)
  }
});
