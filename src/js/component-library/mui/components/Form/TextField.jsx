import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import EnhancedAutocomplete from './Autocomplete';

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
    margin: `${theme.spacing(1)}px 0`,
  },
  autoComplete: {
    '& .MuiAutocomplete-popper': {
      display: 'none',
    },
  },
}));

const EnhancedTextField = (props) => {
  const classes = useStyles();
  const {
    required,
    label,
    fullWidth = false,
    id = '',
    useAutocomplete,
    autocompleteOptions,
    InputLabelProps,
  } = {
    ...props,
  };

  const EnhancedTextField = (params) => {
    return (
      <TextField
        {...params}
        className={classes.root}
        required={required}
        fullWidth={fullWidth}
        id={id}
        InputLabelProps={InputLabelProps}
        label={label}
      />
    );
  };
  if (useAutocomplete) {
    return (
      <EnhancedAutocomplete
        options={autocompleteOptions}
        renderInput={(params) => <EnhancedTextField {...params} />}
      />
    );
  }

  return EnhancedTextField();
};

export default EnhancedTextField;
