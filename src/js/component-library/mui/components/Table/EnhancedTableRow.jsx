import React from 'react';
import TableRow from '@material-ui/core/TableRow';

const EnhancedTableRow = (props) => {
  return <TableRow data-test={'cards-table-row'}>{props.children}</TableRow>;
};

export default EnhancedTableRow;
