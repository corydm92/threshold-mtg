import React, { useState } from 'react';
import EnhancedButton from '../component-library/mui/components/Form/Button';
import EnhancedCheckbox from '../component-library/mui/components/Form/Checkbox';
import EnhancedTextField from '../component-library/mui/components/Form/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EnhancedContainer from '../component-library/mui/components/Container';
import Operands from '../constants/operands';
import MenuItem from '@material-ui/core/MenuItem';

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
  spreadValue: {
    display: 'flex',
  },
  formControlLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 0,
  },
  button: {
    marginTop: theme.spacing(2),
  },
  priceOperand: {
    width: theme.spacing(10),
    marginRight: theme.spacing(1),
  },
  spreadInput: {
    marginTop: 'auto',
  },
}));

const SideBarFilterForm = (props) => {
  const classes = useStyles();
  const { collectionCardNames, collectionSetNames } = { ...props };

  const [foil, setFoil] = useState(false);
  const [setName, setSetName] = useState('');
  const [cardName, setCardName] = useState('');
  const [spread, setSpread] = useState('');

  console.log(setName);

  const handleCheckboxChange = () => {
    setFoil(!foil);
  };

  const handleSpreadChange = (event) => {
    setSpread(event.target.value);
  };

  return (
    <form className={classes.form} data-test='side-bar-filter-form'>
      {/* CHECKBOX FOIL */}

      <EnhancedContainer
        classes={{ root: classes.container }}
        dataCy='checkbox-foil'
      >
        <FormControlLabel
          classes={{ root: classes.formControlLabel }}
          control={
            <EnhancedCheckbox
              foil={foil}
              handleCheckboxChange={handleCheckboxChange}
            />
          }
          labelPlacement='start'
          label='Is Foil?'
        />
      </EnhancedContainer>

      {/* SET NAME */}

      <EnhancedTextField
        dataCy='textfield-set-name'
        fullWidth
        label='Set Name'
        useAutocomplete
        autocompleteOptions={collectionSetNames}
        onChange={(event) => {
          console.log(event.target.value);
          return setSetName(event.target.value);
        }}
        value={setName}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* CARD NAME */}

      <EnhancedTextField
        dataCy='textfield-card-name'
        fullWidth
        label='Card Name'
        useAutocomplete
        autocompleteOptions={collectionCardNames}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* SPREAD */}

      <EnhancedContainer
        className={`${classes.container} ${classes.spreadValue}`}
      >
        <EnhancedTextField
          dataCy='textfield-operand-select'
          select
          label='Spread'
          value={spread}
          onChange={setSpread}
          className={classes.priceOperand}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {Operands.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </EnhancedTextField>
        <EnhancedTextField
          dataCy='textfield-spread'
          className={classes.spreadInput}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </EnhancedContainer>
      {/* Gain (Input) {'\n'} */}
      {/* Date From (Date) {'\n'} */}
      {/* Date To (Date) */}
      <EnhancedButton className={classes.button} buttonText='Submit' />
    </form>
  );
};

export default SideBarFilterForm;
