import React, { PropTypes } from 'react';

const Dashboard = ({ children }) => (
  <div className='dashboard-top'>
    {children}
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;
