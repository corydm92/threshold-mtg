import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: '100%',
      display: 'flex',
      padding: (props) => (props.padding ? theme.spacing(8) : 0),
      alignItems: (props) => (props.alignTop ? 'flex-start' : 'center'),
      borderBottom: '0px',
      color: (props) => {
        if (props.useColor) {
          return props.isPositive
            ? theme.palette.custom.green
            : theme.palette.custom.red;
        }
      },
      fontWeight: (props) => {
        if (props.bold) {
          return 'bold';
        }
      },
    },
  };
});

const EnhancedTableCell = (props) => {
  const classes = useStyles(props);
  const { colSpan, dataTest } = { ...props };
  return (
    <TableCell
      className={classes.root}
      data-test={dataTest}
      colSpan={colSpan}
      component='div'
    >
      {props.children}
    </TableCell>
  );
};

export default EnhancedTableCell;
