import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('activity-sidebar/carousel', 'Integration | Component | activity sidebar/carousel', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{activity-sidebar/carousel}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#activity-sidebar/carousel}}
      template block text
    {{/activity-sidebar/carousel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
