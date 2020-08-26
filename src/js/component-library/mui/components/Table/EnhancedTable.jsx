import React from 'react';
import Table from '@material-ui/core/Table';

function EnhancedTable(props) {
  return <Table component='div'>{props.children}</Table>;
}

export default EnhancedTable;
