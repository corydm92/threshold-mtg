import React from 'react';
import TableBody from '@material-ui/core/TableBody';

const EnhancedTableBody = (props) => {
  const { className } = { ...props };
  return (
    <TableBody className={className} component='div'>
      {props.children}
    </TableBody>
  );
};

export default EnhancedTableBody;
