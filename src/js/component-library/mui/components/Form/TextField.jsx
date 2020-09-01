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
    '& .MuiFormHelperText-root': {
      color: theme.palette.text.primary,
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
    id = '',
    useAutocomplete,
    autocompleteOptions,
    InputLabelProps,
    select,
    helperText,
    className,
    dataCy,
    onChange,
    value,
  } = {
    ...props,
  };

  const EnhancedTextField = (params) => {
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
        data-cy={dataCy}
        // onChange={onChange} // If useAutoComplete, let that be the controlled component.
        // value={value}
      >
        {props.children}
      </TextField>
    );
  };
  if (useAutocomplete) {
    return (
      <EnhancedAutocomplete
        options={autocompleteOptions}
        // onChange={onChange}
        // value={value}
        renderInput={(params) => <EnhancedTextField {...params} />}
      />
    );
  }

  return EnhancedTextField();
};

export default EnhancedTextField;
