import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const EnhancedAutocomplete = (props) => {
  const { id, options, getOptionLabel, renderInput } = { ...props };
  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={getOptionLabel}
      renderInput={renderInput}
    />
  );
};

export default EnhancedAutocomplete;
