import React from 'react';
import TableHead from '@material-ui/core/TableHead';

const EnhancedTableHead = (props) => {
  return <TableHead>{props.children}</TableHead>;
};

export default EnhancedTableHead;
