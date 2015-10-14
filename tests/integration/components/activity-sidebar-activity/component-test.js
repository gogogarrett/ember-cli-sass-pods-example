import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('activity-sidebar-activity', 'Integration | Component | activity sidebar activity', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{activity-sidebar-activity}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#activity-sidebar-activity}}
      template block text
    {{/activity-sidebar-activity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
