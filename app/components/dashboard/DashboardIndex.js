import React, { Component, PropTypes } from 'react';

import Panel from '../shared/design/panel/Panel';
import PanelTitle from '../shared/design/panel/PanelTitle';
import RadButton from '../shared/design/rad-button/RadButton';

class DashIndex extends Component {

  static propTypes = {
    entryList: PropTypes.array
  }

  static defaultProps = {
    entryList: [],
    isLoading: false
  }

  // Render
  //----------------------------------------------------------------------------

  render() {
    const { entryList } = this.props;
    return(
      <div className='container'>
        <h2>Welcome to the Dashboard!</h2>
        <div className='row'>
          <div className='column'>
            <Panel entryList={entryList}>
              <PanelTitle>Manage Entries</PanelTitle>
              {entryList.length ? <p>Entries go here.</p> : <p>No entries to display.</p>}
              <div className='actions'>
                <RadButton goto={'/dashboard/posts/new'}>+ Create New</RadButton>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default DashIndex;
