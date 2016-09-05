import React, { PropTypes } from 'react';
import moment from 'moment';

const EntriesList = (props) => (
  <tbody>{ props.entries.map((entry, index) => {
    return (<tr key={index}>
      <td>{entry.title}</td>
      <td>{moment(entry.created).format('MM/DD/YYYY hh:mma')}</td>
      <td>{entry.updated ? moment(entry.updated).format('MM/DD/YYYY hh:mma') : ''}</td>
      <td>{entry.category}</td>
    </tr>);
  })}
  </tbody>
);

EntriesList.propTypes = {
  entries: PropTypes.array
};

export default EntriesList;
