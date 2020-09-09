import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: (props) => (props.padding ? theme.spacing(8) : 0),
      alignItems: 'center',
      border: (props) => props.noBorder && '0px',
    },
  };
});

const EnhancedTablePagination = (props) => {
  const classes = useStyles(props);

  const {
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    onChangePage,
    onChangeRowsPerPage,
  } = { ...props };

  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component='div'
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      className={classes.root}
    >
      {props.children}
    </TablePagination>
  );
};

export default EnhancedTablePagination;
