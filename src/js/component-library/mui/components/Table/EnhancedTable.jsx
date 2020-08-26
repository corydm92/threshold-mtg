import React from 'react';
import Table from '@material-ui/core/Table';

function EnhancedTable(props) {
  const { component } = { ...props };
  return <Table component={component}>{props.children}</Table>;
}

export default EnhancedTable;
