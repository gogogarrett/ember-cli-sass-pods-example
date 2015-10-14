import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    alert(`you're playing game ${this.get('game-id')}`)
  }
});
