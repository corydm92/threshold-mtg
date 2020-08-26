import React from 'react';
import TableHead from '@material-ui/core/TableHead';

const EnhancedTableHead = (props) => {
  const { component } = { ...props };
  return <TableHead component={component}>{props.children}</TableHead>;
};

export default EnhancedTableHead;
