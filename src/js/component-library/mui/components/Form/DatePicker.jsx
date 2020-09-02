import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200,
    '& .MuiFormLabel-root': {
      color: theme.palette.text.primary,
    },
  },
}));

const EnhancedDatePicker = (props) => {
  const classes = useStyles();

  const { label, value, onChange } = { ...props };

  return (
    <TextField
      label={label}
      type='date'
      value={value}
      onChange={onChange}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default EnhancedDatePicker;
