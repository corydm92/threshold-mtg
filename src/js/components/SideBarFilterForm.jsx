import React, { useState, useEffect } from 'react';
import EnhancedButton from '../component-library/mui/components/Form/Button';
import EnhancedCheckbox from '../component-library/mui/components/Form/Checkbox';
import EnhancedTextField from '../component-library/mui/components/Form/TextField';
import EnhancedContainer from '../component-library/mui/components/Container';
import EnhancedAutocomplete from '../component-library/mui/components/Form/Autocomplete';
import EnhancedDatepicker from '../component-library/mui/components/Form/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Operands from '../constants/operands';
import MenuItem from '@material-ui/core/MenuItem';
import { uniq } from 'lodash';
import { getPriceCategory } from '../../utils';

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
      // Applies to rows with two elements, needed to span one label for both inputs.
      minWidth: '200px',
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
    '& .MuiFormControlLabel-label': {
      fontSize: theme.typography.fontSize,
    },
  },
  button: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.fontSize,
    width: '100%',
  },
  priceOperand: {
    width: theme.spacing(10),
    marginRight: theme.spacing(1),
  },
  menuItem: {
    fontSize: theme.typography.fontSize,
  },
  spreadInput: {
    marginTop: 'auto',
  },
}));

const SideBarFilterForm = (props) => {
  const classes = useStyles();
  const { cardNamesAndSets, priceCategory } = {
    ...props,
  };

  const [isFoil, setIsFoil] = useState(false);
  const [setName, setSetName] = useState('');
  const [cardName, setCardName] = useState('');
  const [spreadOperator, setSpreadOperator] = useState('');
  const [spreadValue, setSpreadValue] = useState('');
  const [gainOperator, setGainOperator] = useState('');
  const [gainValue, setGainValue] = useState('');
  const [tcgPriceOperator, setTcgPriceOperator] = useState('');
  const [tcgPriceValue, setTcgPriceValue] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Not sent to filter reducer, just for filtering select options
  const [cardNameOptions, setCardNameOptions] = useState([]);
  const [setNameOptions, setSetNameOptions] = useState([]);

  useEffect(() => {
    // Sets and filters set and card drop down options
    let namesAndSets = [...cardNamesAndSets];
    let outNames = [];
    let outSets = [];

    if (setName) {
      for (let entry of namesAndSets) {
        if (entry.set === setName) {
          outNames.push(entry.name);
        }

        // Handles keeping all set names if card name is blank
        if (!cardName) {
          outSets.push(entry.set);
        }
      }
    }

    if (cardName) {
      for (let entry of namesAndSets) {
        if (entry.name === cardName) {
          outSets.push(entry.set);
        }

        // Handles keeping all card names if set name is blank
        if (!setName) {
          outNames.push(entry.name);
        }
      }
    }

    if (!setName && !cardName) {
      for (let entry of namesAndSets) {
        outNames.push(entry.name);
        outSets.push(entry.set);
      }
    }

    setCardNameOptions(uniq(outNames.sort()));
    setSetNameOptions(uniq(outSets.sort()));
  }, [
    cardNamesAndSets,
    setName,
    cardName,
    setCardNameOptions,
    setSetNameOptions,
  ]);

  const handleSubmit = () => {
    const state = {
      isFoil,
      setName,
      cardName,
      spreadOperator,
      spreadValue,
      gainOperator,
      gainValue,
      dateFrom,
      dateTo,
    };

    console.log(state);
  };

  return (
    <form className={classes.form} data-test='side-bar-filter-form'>
      {/* CHECKBOX FOIL */}

      <EnhancedContainer
        classes={{ root: classes.container }}
        dataTest='checkbox-foil'
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

      <EnhancedAutocomplete
        dataTest='autocomplete-set-name'
        onChange={(e) => setSetName(e.target.textContent)}
        value={setName}
        label='Set Name'
        options={setNameOptions}
      />

      {/* CARD NAME */}

      <EnhancedAutocomplete
        dataTest='autocomplete-card-name'
        onChange={(e) => setCardName(e.target.textContent)}
        value={cardName}
        label='Card Name'
        options={cardNameOptions}
      />

      {/* SPREAD */}

      <EnhancedContainer
        className={`${classes.container} ${classes.operandValue}`}
      >
        <EnhancedTextField
          dataTest='textfield-operand-select'
          select
          value={spreadOperator}
          onChange={(event) => setSpreadOperator(event.target.value)}
          label='Spread'
          className={classes.priceOperand}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {Operands.map((option) => {
            return (
              <MenuItem
                className={classes.menuItem}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </EnhancedTextField>
        <EnhancedTextField
          dataTest='textfield-spread'
          className={classes.spreadInput}
          value={spreadValue}
          onChange={(event) => setSpreadValue(event.target.value)}
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
          dataTest='textfield-operand-select'
          select
          label='Gain / Loss'
          value={gainOperator}
          onChange={(event) => setGainOperator(event.target.value)}
          className={classes.priceOperand}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {Operands.map((option) => {
            return (
              <MenuItem
                className={classes.menuItem}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </EnhancedTextField>
        <EnhancedTextField
          dataTest='textfield-gain-loss'
          className={classes.spreadInput}
          value={gainValue}
          onChange={(event) => setGainValue(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </EnhancedContainer>

      {/* TCG PRICE */}

      <EnhancedContainer
        className={`${classes.container} ${classes.operandValue}`}
      >
        <EnhancedTextField
          dataTest='tcg-price-operand-select'
          select
          label={getPriceCategory(priceCategory)}
          value={tcgPriceOperator}
          onChange={(event) => setTcgPriceOperator(event.target.value)}
          className={classes.priceOperand}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {Operands.map((option) => {
            return (
              <MenuItem
                className={classes.menuItem}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </EnhancedTextField>
        <EnhancedTextField
          dataTest='tcg-price-gain-loss'
          className={classes.spreadInput}
          value={tcgPriceValue}
          onChange={(event) => setTcgPriceValue(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </EnhancedContainer>

      {/* DATE FROM */}

      <EnhancedDatepicker
        label='Date From'
        value={dateFrom}
        onChange={(event) => setDateFrom(event.target.value)}
      />

      {/* DATE TO */}

      <EnhancedDatepicker
        label='Date To'
        value={dateTo}
        onChange={(event) => setDateTo(event.target.value)}
      />

      <EnhancedContainer disableGutters>
        <EnhancedButton
          className={classes.button}
          buttonText='Submit'
          onClick={handleSubmit}
        />

        <EnhancedButton
          className={classes.button}
          tertiary
          buttonText='Clear All'
          onClick={handleSubmit}
        />
      </EnhancedContainer>
    </form>
  );
};

export default SideBarFilterForm;
