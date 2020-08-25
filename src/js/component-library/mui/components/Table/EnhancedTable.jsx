import React from 'react';
import Table from '@material-ui/core/Table';

function EnhancedTable(props) {
  return <Table>{props.children}</Table>;
}

export default EnhancedTable;
