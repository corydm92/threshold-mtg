import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';

const MuiTableContainer = (props) => {
  return <TableContainer>{props.children}</TableContainer>;
};

export default MuiTableContainer;
