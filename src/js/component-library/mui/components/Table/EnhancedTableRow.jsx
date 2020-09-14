import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderBottom: `1px solid ${theme.palette.custom.lightGray}`,
    },
  };
});

const EnhancedTableRow = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const { className, id } = { ...props };

  return (
    <TableRow
      id={id}
      ref={ref}
      classes={{ root: classes.root }}
      className={className}
      data-test={'cards-table-row'}
      component='div'
    >
      {props.children}
    </TableRow>
  );
});

export default EnhancedTableRow;
