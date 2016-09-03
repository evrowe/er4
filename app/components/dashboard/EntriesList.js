import React, { PropTypes } from 'react';

const EntriesList = (props) => (
  <tbody>{ props.entries.map((entry, index) => {
    return (<tr key={index}>
      <td>{entry.title}</td>
      <td>{entry.created}</td>
      <td>{entry.updated}</td>
      <td>{entry.category}</td>
    </tr>);
  })}
  </tbody>
);

EntriesList.propTypes = {
  entries: PropTypes.array
};

export default EntriesList;
