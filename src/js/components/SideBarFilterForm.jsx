import React, { useState, useEffect } from 'react';
import EnhancedButton from '../component-library/mui/components/Form/Button';
import EnhancedCheckbox from '../component-library/mui/components/Form/Checkbox';
import EnhancedTextField from '../component-library/mui/components/Form/TextField';
import EnhancedContainer from '../component-library/mui/components/Container';
import EnhancedAutocomplete from '../component-library/mui/components/Form/Autocomplete';
import EnhancedDatepicker from '../component-library/mui/components/Form/DatePicker';
import EnhancedInputAdornment from '../component-library/mui/components/Form/InputAdornment';
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
  selectOperand: {
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
  const {
    // STORE
    priceCategory,
    cardNamesAndSets,
    filterValues,

    // ACTIONS
    setFilterOptions,
    clearFilterOptions,
  } = { ...props };

  const [isFoil, setIsFoil] = useState(filterValues.isFoil);
  const [setName, setSetName] = useState(filterValues.setName);
  const [cardName, setCardName] = useState(filterValues.cardName);
  const [spreadOperator, setSpreadOperator] = useState(
    filterValues.spreadOperator
  );
  const [spreadValue, setSpreadValue] = useState(filterValues.spreadValue);
  const [gainOperator, setGainOperator] = useState(filterValues.gainOperator);
  const [gainValue, setGainValue] = useState(filterValues.gainValue);
  const [tcgPriceOperator, setTcgPriceOperator] = useState(
    filterValues.tcgPriceOperator
  );
  const [tcgPriceValue, setTcgPriceValue] = useState(
    filterValues.tcgPriceValue
  );
  const [dateFrom, setDateFrom] = useState(filterValues.dateFrom);
  const [dateTo, setDateTo] = useState(filterValues.dateTo);

  // Not sent to filter reducer, just for filtering select options
  const [cardNameOptions, setCardNameOptions] = useState([]);
  const [setNameOptions, setSetNameOptions] = useState([]);

  useEffect(() => {
    // Setting an initial state, as well as updating component state when redux store is cleared

    setIsFoil(filterValues.isFoil);
    setSetName(filterValues.setName);
    setCardName(filterValues.cardName);
    setSpreadOperator(filterValues.spreadOperator);
    setSpreadValue(filterValues.spreadValue);
    setGainOperator(filterValues.gainOperator);
    setGainValue(filterValues.gainValue);
    setTcgPriceOperator(filterValues.tcgPriceOperator);
    setTcgPriceValue(filterValues.tcgPriceValue);
    setDateFrom(filterValues.dateFrom);
    setDateTo(filterValues.dateTo);
  }, [filterValues]);

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
      tcgPriceOperator,
      tcgPriceValue,
      dateFrom,
      dateTo,
    };

    setFilterOptions(state);
  };

  const handleClearAll = () => {
    clearFilterOptions();
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
          className={classes.selectOperand}
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
          fullWidth
          onChange={(event) => setTcgPriceValue(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <EnhancedInputAdornment position='start'>
                {'$'}
              </EnhancedInputAdornment>
            ),
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
          className={classes.selectOperand}
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
          fullWidth
          onChange={(event) => setGainValue(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <EnhancedInputAdornment position='start'>
                {'$'}
              </EnhancedInputAdornment>
            ),
          }}
        />
      </EnhancedContainer>

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
          className={classes.selectOperand}
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
          fullWidth
          onChange={(event) => setSpreadValue(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <EnhancedInputAdornment position='start'>
                {'%'}
              </EnhancedInputAdornment>
            ),
          }}
        />
      </EnhancedContainer>

      {/* DATE FROM */}

      <EnhancedDatepicker
        label='Date From'
        value={dateFrom}
        fullWidth
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
          onClick={handleClearAll}
        />
      </EnhancedContainer>
    </form>
  );
};

export default SideBarFilterForm;
