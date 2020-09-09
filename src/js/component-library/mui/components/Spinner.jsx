import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import EnhancedTypography from './Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typography: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

export default function CircularIndeterminate(props) {
  const classes = useStyles();

  const { className } = { ...props };

  return (
    <div className={classes.root + ' ' + className}>
      <CircularProgress />
      <EnhancedTypography bold className={classes.typography}>
        Loading Inventory...
      </EnhancedTypography>
    </div>
  );
}
