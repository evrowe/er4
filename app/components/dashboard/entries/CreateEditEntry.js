import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import $ from 'jquery';

// Components
import EntryForm from './EntryForm';
import Panel from '../../shared/design/panel/Panel';
import PanelTitle from '../../shared/design/panel/PanelTitle';
// import RadButton from '../../shared/design/rad-button/RadButton';

// Utils
import Authentication from '../../../utils/authentication';

import './entry-form.css';

class NewEntry extends Component {

  static propTypes = {
    route: PropTypes.object,
    params: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  state = {
    entry: {
      category: '',
      content: '',
      created: '',
      excerpt: '',
      headerImage: '',
      slug: '',
      tags: '',
      title: '',
      updated: ''
    },
    isLoading: false,
    isNew: false,
    loadError: false,
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

  fetchEntryForUpdate() {
    // If the component has been invoked in the "edit entry" context, fetch the
    // entry from the back end and set it up as the entry state for the form to
    // perform edits on.
    const { params : { entryId } } = this.props;
    if (this.state.isNew) {
      this.setState({ isLoading: true });
      $.ajax(`/service/dashboard/entry/${entryId}?token=${Authentication.get('token')}`).then(
        res => {
          this.setState({ entry: res, isLoading: false });
        },
        // On error, update the component state to reflect that an error occurred
        // so that we can hide/disable the entry form
        err => {
          this.setState({ isLoading: false, loadError: err });
        }
      );
    }
  }

  handleSubmit = (data) => {
    let currentDate = null,
        endpointResolution = 'new',
        entryId = '',
        requestType = 'POST',
        updatedDate = null;

    if (this.state.isNew) {
      currentDate = moment().format();
    } else {
      currentDate = data.created;
      endpointResolution = 'update';
      entryId = `/${data.slug}`;
      requestType = 'PUT';
      updatedDate = moment().format();
    }

    // Update the component state
    this.setState({ entry: {
        ...data,
        created: currentDate,
        updated: updatedDate
      }}, () => {
        // Once state update is complete, fire the request off
        console.log('state.entry: ', this.state.entry);

        // Do the nifty rad business of saving the data to the server,
        // optionally append the entry id for update requests.
        $.ajax(`/service/dashboard/entry/${endpointResolution}${entryId}?token=${Authentication.get('token')}`, {
          contentType: 'application/json',
          data: JSON.stringify(this.state.entry),
          method: requestType
        }).then(res => {
          this.context.router.replace('/dashboard');
        });
      }
    );
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
    this.setState({ entry: { slug }});
  }

  // Hooks
  // ---------------------------------------------------------------------------

  componentWillMount() {
    this.setState({ isNew: this.props.route.isNew });
    this.fetchEntryForUpdate();
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
