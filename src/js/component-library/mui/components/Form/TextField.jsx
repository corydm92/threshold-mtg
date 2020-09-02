import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // Targets the form label and border color before focus
    '& .MuiInputLabel-root': {
      color: theme.palette.text.primary,
    },
    // Targets the form label and border color after focus
    '& .Mui-focused': {
      color: theme.palette.primary.main,
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.text.primary,
    },
    '& .MuiInput-input': {
      fontSize: theme.typography.fontSize,
    },
    margin: `${theme.spacing(1)}px 0`,
  },
}));

const EnhancedTextField = (props) => {
  const classes = useStyles();
  const {
    required,
    label,
    fullWidth = false,
    id,
    InputLabelProps,
    select,
    helperText,
    className,
    dataTest,
    onChange,
    value,
    params,
  } = {
    ...props,
  };

  return (
    <TextField
      select={select}
      {...params}
      className={`${classes.root} ${className}`}
      required={required}
      fullWidth={fullWidth}
      id={id}
      InputLabelProps={InputLabelProps}
      label={label}
      helperText={helperText}
      data-test={dataTest}
      value={value}
      onChange={onChange}
    >
      {props.children}
    </TextField>
  );
};

export default EnhancedTextField;
