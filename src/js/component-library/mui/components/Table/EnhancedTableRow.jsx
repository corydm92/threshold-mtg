import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // display: 'none',
      borderBottom: `1px solid ${theme.palette.custom.lightGray}`,
      margin: theme.spacing(1),
    },
  };
});

const EnhancedTableRow = (props) => {
  const classes = useStyles();

  const { className } = { ...props };
  return (
    <TableRow
      classes={{ root: classes.root }}
      className={className}
      data-test={'cards-table-row'}
      component='div'
    >
      {props.children}
    </TableRow>
  );
};

export default EnhancedTableRow;
