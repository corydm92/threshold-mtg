import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const EnhancedTextField = (props) => {
  const { required, label, defaultValue } = { ...props };
  return (
    <TextField
      required={required}
      id='id'
      label={label}
      defaultValue={defaultValue}
    />
  );
};

export default EnhancedTextField;
