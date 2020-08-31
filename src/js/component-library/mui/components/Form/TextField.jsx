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
}));

const EnhancedTextField = (props) => {
  const classes = useStyles();
  const {
    required,
    label,
    fullWidth = false,
    defaultValue = '',
    id = '',
    useAutocomplete,
  } = {
    ...props,
  };

  const testOptions = [{ name: 'test1' }, { name: 'test2' }];
  const EnhancedTextField = (params) => (
    <TextField
      {...params}
      className={classes.root}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      defaultValue={defaultValue}
    />
  );

  if (useAutocomplete) {
    return (
      <EnhancedAutocomplete
        options={testOptions}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <EnhancedTextField {...params} />}
      />
    );
  }

  return EnhancedTextField();
};

export default EnhancedTextField;
