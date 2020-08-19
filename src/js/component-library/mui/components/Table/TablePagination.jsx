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
      margin: '8px 0',
      alignItems: 'center',
      height: '100%',
      border: (props) => props.noBorder && '0px',
    },
  };
});

const MuiTablePagination = (props) => {
  const classes = useStyles(props);
  return (
    <TablePagination className={classes.root}>{props.children}</TablePagination>
  );
};

export default MuiTablePagination;
