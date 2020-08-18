import React from 'react';
import Table from '@material-ui/core/Table';

function MuiTable(props) {
  return <Table>{props.children}</Table>;
}

export default MuiTable;
