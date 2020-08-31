import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // Targets the form label and border color before focus
    '& .MuiInputLabel-root': {
      color: 'black',
    },
    // Targets the form label and border color after focus
    '& .MuiInputLabel-shrink': {
      color: theme.palette.primary.main,
    },
  },
}));

const EnhancedTextField = (props) => {
  const classes = useStyles();
  const { required, label, fullWidth = false, defaultValue = '', id = '' } = {
    ...props,
  };
  return (
    <TextField
      className={classes.root}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      defaultValue={defaultValue}
    />
  );
};

export default EnhancedTextField;
