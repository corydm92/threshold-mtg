import React from 'react';
import TableRow from '@material-ui/core/TableRow';

const MuiTableRow = (props) => {
  return <TableRow data-test={'cards-table-row'}>{props.children}</TableRow>;
};

export default MuiTableRow;
