import React from 'react';
import TableBody from '@material-ui/core/TableBody';

const EnhancedTableBody = (props) => {
  return <TableBody component='div'>{props.children}</TableBody>;
};

export default EnhancedTableBody;
