import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      padding: (props) => (props.padding ? theme.spacing(8) : 0),
      margin: '8px 0',
      alignItems: 'center',
      justifyContent: (props) => props.centerText && 'center',
      height: '100%',
      borderBottom: (props) => props.noBorder && '0px',
    },
  };
});

const MuiTableCell = (props) => {
  const classes = useStyles(props);
  return (
    <TableCell className={classes.root} colSpan={props.colSpan}>
      {props.children}
    </TableCell>
  );
};

export default MuiTableCell;
