import React from 'react';
import Table from '@material-ui/core/Table';

function EnhancedTable(props) {
  const { className, stickyHeader } = { ...props };
  return (
    <Table className={className} stickyHeader={stickyHeader} component='div'>
      {props.children}
    </Table>
  );
}

export default EnhancedTable;
