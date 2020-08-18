import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: '100%',
    display: 'block',
  },
});

const MuiTablePagination = (props) => {
  const classes = useStyles();
  return (
    <TablePagination className={classes.root}>{props.children}</TablePagination>
  );
};

export default MuiTablePagination;
