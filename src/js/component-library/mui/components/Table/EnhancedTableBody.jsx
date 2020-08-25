import React from 'react';
import TableBody from '@material-ui/core/TableBody';

const EnhancedTableBody = (props) => {
  return <TableBody>{props.children}</TableBody>;
};

export default EnhancedTableBody;
