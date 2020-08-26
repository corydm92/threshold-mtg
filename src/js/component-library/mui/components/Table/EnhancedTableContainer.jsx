import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';

const EnhancedTableContainer = (props) => {
  return <TableContainer component='div'>{props.children}</TableContainer>;
};

export default EnhancedTableContainer;
