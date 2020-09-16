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
    '& .MuiFormLabel-root': {
      color: theme.palette.text.primary,
    },
    '& .MuiInput-input': {
      fontSize: theme.typography.fontSize,
    },
  },
}));

const EnhancedDatePicker = (props) => {
  const classes = useStyles();

  const { label, value, onChange, fullWidth } = { ...props };

  return (
    <TextField
      fullWidth={fullWidth}
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
