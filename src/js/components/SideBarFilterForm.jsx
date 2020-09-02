import React, { useState } from 'react';
import EnhancedButton from '../component-library/mui/components/Form/Button';
import EnhancedCheckbox from '../component-library/mui/components/Form/Checkbox';
import EnhancedTextField from '../component-library/mui/components/Form/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EnhancedContainer from '../component-library/mui/components/Container';
import Operands from '../constants/operands';
import MenuItem from '@material-ui/core/MenuItem';
import EnhancedDatepicker from '../component-library/mui/components/Form/DatePicker';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiAutocomplete-root': {
      width: '100%',
    },
    '& .MuiInputLabel-root': {
      minWidth: '100px',
    },
  },
  container: {
    padding: 0,
  },
  operandValue: {
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
  const [isFoil, setIsFoil] = useState(false);

  const classes = useStyles();
  const { collectionCardNames, collectionSetNames } = { ...props };

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
              checked={isFoil}
              onChange={() => setIsFoil(!isFoil)}
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
        className={`${classes.container} ${classes.operandValue}`}
      >
        <EnhancedTextField
          dataCy='textfield-operand-select'
          select
          label='Spread'
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

      {/* GAIN */}

      <EnhancedContainer
        className={`${classes.container} ${classes.operandValue}`}
      >
        <EnhancedTextField
          dataCy='textfield-operand-select'
          select
          label='Gain / Loss'
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
          dataCy='textfield-gain-loss'
          className={classes.spreadInput}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </EnhancedContainer>

      {/* DATE FROM */}

      <EnhancedDatepicker label='Date From' />

      {/* DATE TO */}

      <EnhancedDatepicker label='Date To' />

      <EnhancedButton className={classes.button} buttonText='Submit' />
    </form>
  );
};

export default SideBarFilterForm;
