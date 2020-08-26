import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';

const EnhancedTableFooter = (props) => {
  return <TableFooter component='div'>{props.children}</TableFooter>;
};

export default EnhancedTableFooter;
