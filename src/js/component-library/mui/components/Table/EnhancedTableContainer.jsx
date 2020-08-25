import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';

const EnhancedTableContainer = (props) => {
  return <TableContainer>{props.children}</TableContainer>;
};

export default EnhancedTableContainer;
