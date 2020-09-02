import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
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
    margin: `${theme.spacing(1)}px 0`,
  },
  popper: {
    '& .MuiAutocomplete-listbox': {
      // Sets fixed height for autocomplete selector
      maxHeight: '200px',
    },
  },
}));

const EnhancedAutocomplete = (props) => {
  const classes = useStyles();
  const { id, options, onChange } = { ...props };
  return (
    <Autocomplete
      classes={{ root: classes.root, popper: classes.popper }}
      id={id}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Set Name'
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
      onChange={onChange}
    />
  );
};

export default EnhancedAutocomplete;
