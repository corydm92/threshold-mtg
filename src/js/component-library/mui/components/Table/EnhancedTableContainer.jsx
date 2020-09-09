import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';

const EnhancedTableContainer = (props) => {
  const { classes, className } = { ...props };
  return (
    <TableContainer className={className} classes={classes} component='div'>
      {props.children}
    </TableContainer>
  );
};

export default EnhancedTableContainer;
