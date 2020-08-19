import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

const MuiRadio = () => {
  const classes = useStyles();
  return <Radio color='primary' />;
};

export default MuiRadio;
