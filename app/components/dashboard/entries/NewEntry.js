import React, { Component } from 'react';

import EntryForm from './EntryForm';
import Panel from '../../shared/design/panel/Panel';
import PanelTitle from '../../shared/design/panel/PanelTitle';
// import RadButton from '../../shared/design/rad-button/RadButton';

import './entry-form.css';

class NewEntry extends Component {

  state = {
    entry: {
      content: '',
      excerpt: '',
      id: '',
      title: ''
    },
    slugManuallyChanged: false
  }

  // Methods
  // ---------------------------------------------------------------------------

  convertTitleToSlug = (e) => {
    e.persist();
    if (!this.state.slugManuallyChanged) {
      this.updateSlug(e);
    }
  }

  didManuallyChangeSlug = (e) => {
    e.persist();
    // If the user manually changed the slug field, disable automatic slug
    // changes on future updates to the title, UNLESS the manually updated value
    // is empty, indicating the user cleared the field; in this case, turn auto-
    // slugging back on.
    if (e.target.value !== '') {
      this.setState({ slugManuallyChanged: true });
    } else {
      this.setState({ slugManuallyChanged: false });
    }
    this.updateSlug(e);
  }

  handleSubmit = (data) => {
    this.setState({ entry: { data }});
    // Do the nifty rad business of saving the data to the server
  }
  /**
   * Converts a string into a simple id slug containing only numbers, letters,
   * and hyphens. Useful for creating things like entry slugs for use as IDs
   *
   * For lulz: https://www.youtube.com/watch?v=g8c9HvcDDHI
   *
   * I realize she's "Gail the Snail" (and not Slug) but THIS IS CLOSE ENOUGH.
   *
   * @TODO Move this into a util file(?)
   * @method saltTheSlug
   * @param {String} grossSlug The slug to be salted (severely mutated)
   * @return {[type]}
   */
  saltTheSlug = (grossSlug) => {
    return grossSlug.replace(/[^a-z0-9áéíóúñü _-]/gim, '') // remove all characters except alpha, numbers, spaces, hyphens and underscores
      .toLowerCase() // convert text to lowercase
      .trim() // trim whitespace from the edges
      .replace(/[ _]/gim, '-') // replace all spaces and underscores with hyphens
      .replace(/-+/gim, '-'); // collapse all instances of multiple hyphens to single hyphens
  }

  updateSlug = (e) => {
    e.persist();
    let slug = this.saltTheSlug(e.target.value);
    this.setState({ entry: { id: slug }});
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <Panel>
              <PanelTitle>Create A New Entry</PanelTitle>
              <EntryForm
                convertTitleToSlug={this.convertTitleToSlug}
                didManuallyChangeSlug={this.didManuallyChangeSlug}
                entry={this.state.entry}
                handleSubmit={this.handleSubmit} />
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEntry;
