import React from 'react';
import TableBody from '@material-ui/core/TableBody';

const EnhancedTableBody = (props) => {
  const { component } = { ...props };
  return <TableBody component={component}>{props.children}</TableBody>;
};

export default EnhancedTableBody;
