import React, { useState } from 'react';
import EnhancedButton from '../component-library/mui/components/Form/Button';
import EnhancedCheckbox from '../component-library/mui/components/Form/Checkbox';
import EnhancedTextField from '../component-library/mui/components/Form/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel } from '@material-ui/core/';
import EnhancedContainer from '../component-library/mui/components/Container';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiAutocomplete-root': {
      width: '100%',
    },
  },
  container: {
    padding: 0,
  },
  formControlLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 0,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const SideBarFilterForm = (props) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const { collectionCardNames, collectionSetNames } = { ...props };
  return (
    <form className={classes.form} data-test='side-bar-filter-form'>
      <EnhancedTextField
        fullWidth
        label='Card Name'
        useAutocomplete
        autocompleteOptions={collectionCardNames}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <EnhancedTextField
        fullWidth
        label='Set Name'
        useAutocomplete
        autocompleteOptions={collectionSetNames}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <EnhancedContainer classes={{ root: classes.container }}>
        <FormControlLabel
          classes={{ root: classes.formControlLabel }}
          control={
            <EnhancedCheckbox
              checked={checked}
              handleCheckboxChange={handleCheckboxChange}
            />
          }
          labelPlacement='start'
          label='Foil'
        />
      </EnhancedContainer>
      {/* Card Set (Input) {'\n'} */}
      {/* Foil (Checkbox) {'\n'} */}
      {/* Spread (Input) {'\n'} */}
      {/* Gain (Input) {'\n'} */}
      {/* Date From (Date) {'\n'} */}
      {/* Date To (Date) */}
      <EnhancedButton className={classes.button} buttonText='Submit' />
    </form>
  );
};

export default SideBarFilterForm;
