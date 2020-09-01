import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  popper: {
    '& .MuiAutocomplete-listbox': {
      // Sets fixed height for autocomplete selector
      maxHeight: '200px',
    },
  },
}));

const EnhancedAutocomplete = (props) => {
  const classes = useStyles();
  const { id, options, getOptionLabel, renderInput, onChange, value } = {
    ...props,
  };
  return (
    <Autocomplete
      classes={{ root: classes.root, popper: classes.popper }}
      id={id}
      options={options}
      getOptionLabel={getOptionLabel}
      renderInput={renderInput}
      onChange={onChange}
      value={value}
    />
  );
};

export default EnhancedAutocomplete;
