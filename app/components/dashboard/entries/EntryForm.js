import React, { Component, PropTypes } from 'react';

// Utils
import { getFormElements } from '../../../utils/form-helpers';

import './entry-form.css';

/**
 * A multi-purpose form for creating new entries and editing existing entries.
 * The form requires that an object representing an entry be passed into it,
 * as well as a number of handler methods for dealing with live-updating values
 * and form data submission.
 *
 * @class Component.EntryForm
 * @constructor
 * @extends React.Component
 */
class EntryForm extends Component {

  // Setup + Defaults
  // ---------------------------------------------------------------------------

  static propTypes = {
    convertTitleToSlug: PropTypes.func.isRequired,
    didManuallyChangeSlug: PropTypes.func.isRequired,
    entry: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  // Methods
  // ---------------------------------------------------------------------------

  /**
   * Grab the form's data and send it back up to the parent component for submission
   *
   * @method prepData
   * @param {Object} e The event which triggered the method
   * @return {undefined}
   */
  prepData = (e) => {
    e.preventDefault();
    const formData = getFormElements(this.refs.EntryForm);
    this.props.handleSubmit(formData);
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    return(
      <form ref='EntryForm' onSubmit={this.prepData}>
        <div className='form-row'>
          <p><strong>Entry Title</strong></p>
          <input
            type='text'
            name='title'
            onChange={this.props.convertTitleToSlug} />
        </div>
        <div className='form-row'>
          <p><strong>Entry Slug</strong></p>
          <input
            value={this.props.entry.id}
            type='text'
            name='id'
            onChange={this.props.didManuallyChangeSlug} />
        </div>
        <div className='form-row'>
          <p><strong>Header Image URL</strong></p>
          <input
            type='text'
            name='headerImage' />
        </div>
        <div className='form-row'>
          <p><strong>Entry Excerpt</strong><br/>Enter some plain text</p>
          <textarea
            name='excerpt'
            rows='3'
            className='entry-textarea' />
        </div>
        <div className='form-row'>
          <p><strong>Entry Content</strong><br/>MARKDOWN, BABY!</p>
          <textarea
            name='content'
            rows='30'
            className='entry-textarea' />
        </div>
        <input
          type='submit'
          value='Create' />
      </form>
    );
  }
}

export default EntryForm;
