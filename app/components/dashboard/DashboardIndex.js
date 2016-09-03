import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

// Components
import EntriesList from './EntriesList';
import Panel from '../shared/design/panel/Panel';
import PanelTitle from '../shared/design/panel/PanelTitle';
import RadButton from '../shared/design/rad-button/RadButton';

// Utils
import Authentication from '../../utils/authentication';

import './dashboard.css';

class DashIndex extends Component {

  // PropTypes and Defaults
  //----------------------------------------------------------------------------

  state = {
    entries: [],
    isLoading: false
  }

  // Methods
  //----------------------------------------------------------------------------

  getEntryList() {
    $.ajax(`/service/dashboard/entries?token=${Authentication.get('token')}`).then(response => {
      this.setState({ entries: response.entries });
    });
  }

  // Hooks
  //----------------------------------------------------------------------------

  componentWillMount() {
    this.getEntryList();
  }

  // Render
  //----------------------------------------------------------------------------

  render() {
    const { entries } = this.state;
    return(
      <div className='container'>
        <h2>Welcome to the Dashboard!</h2>
        <div className='row'>
          <div className='column'>
            <Panel entries={entries}>
              <PanelTitle>Manage Entries</PanelTitle>
              {entries.length ?
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Date Created</th>
                      <th>Date Updated</th>
                      <th>Categories</th>
                    </tr>
                  </thead>
                  <EntriesList entries={entries} />
                </table> : <p>No entries to display.</p>}
              <div className='actions'>
                <RadButton goto={'/dashboard/new-entry'}>+ Create New</RadButton>
                <a className='button button-outline' href='/service/auth/logout'>Log Out</a>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default DashIndex;
