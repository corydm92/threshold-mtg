import React from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: '#333 !important',
      '$&hover': {
        color: '#333',
      },
    },
  };
});

const MuiTableSortLabel = (props) => {
  const classes = useStyles(props);
  const { active, direction, onClick } = { ...props };
  return (
    <TableSortLabel
      classes={{ root: classes.root, icon: classes.root, active: classes.root }}
      active={active}
      direction={direction}
      onClick={onClick}
    >
      {props.children}
    </TableSortLabel>
  );
};

export default MuiTableSortLabel;
