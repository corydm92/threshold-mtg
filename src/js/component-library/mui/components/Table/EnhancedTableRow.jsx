import React from 'react';
import TableRow from '@material-ui/core/TableRow';

const EnhancedTableRow = (props) => {
  const { classes, className, component } = { ...props };
  return (
    <TableRow
      classes={classes}
      className={className}
      data-test={'cards-table-row'}
      component={component}
    >
      {props.children}
    </TableRow>
  );
};

export default EnhancedTableRow;
