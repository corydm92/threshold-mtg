import React from 'react';
import Table from '@material-ui/core/Table';

function EnhancedTable(props) {
  const { className } = { ...props };
  return (
    <Table className={className} component='div'>
      {props.children}
    </Table>
  );
}

export default EnhancedTable;
