import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// #############################################################################
// Setup

moduleForComponent('journal-entry', 'Integration | Component | journal entry', {
  integration: true
});

const mockEntry = {
  title: 'Test Title',
  content: 'This is a test post'
}

// #############################################################################
// Tests

test('journal entry component renders', function(assert) {

  this.set('model', mockEntry);

  this.render(hbs`{{journal-entry}}`);

  assert.ok(this.$('[data-test="journal-entry"]').length,
    'The journal entry component should render');
});

// -----------------------------------------------------------------------------

test('journal entry component outputs content', function(assert) {

  assert.expect(2);

  // ------------------------------------------------------
  // Set the mock entry object up as the context's model
  this.set('model', mockEntry);

  this.render(hbs`{{journal-entry entry=model}}`);

  assert.equal(this.$('[data-test="title"]').text().trim(), this.get('model.title'),
    'The displayd entry title should match the model title');

  assert.equal(this.$('[data-test="content"]').text().trim(), this.get('model.content'),
    'The displayed entry content should match the model content');
});
