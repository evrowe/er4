import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardActions from '../../actions/dashboard.js';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(dashboardActions, dispatch);
}

class Dashboard extends Component {


  // Render
  //----------------------------------------------------------------------------

  render() {
    return(
      <div className='dashboard-top'>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
