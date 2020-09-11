import React, { useState, useEffect } from 'react';
import EnhancedTextfield from '../component-library/mui/components/Form/TextField';
import EnhancedContainer from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';
import { getPriceSpread, roundTwoDecimals } from '../../utils';
import { makeStyles } from '@material-ui/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => {
  return {
    textField: {
      maxWidth: '50%',
      '& .MuiInputBase-input': {
        // These both hide the up/down arrows in the input
        '&::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '&::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
      },
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    typography: {
      maxWidth: '40%',
    },
    adornment: {
      '& .MuiTypography-root': {
        color: theme.palette.text.primary,
      },
    },
  };
});

const SideBarQuickCalculation = (props) => {
  const classes = useStyles();
  const { tcgPrice, purchasePrice, gain, spread } = { ...props };

  const [tcgValue, setTcgValue] = useState(tcgPrice || ''); // Fixes switching between controlled / uncontrolled
  const [purchaseValue, setPurchaseValue] = useState(purchasePrice || '');
  const [gainValue, setGainValue] = useState(gain || '');
  const [spreadValue, setSpreadValue] = useState(spread || '');

  const handleTcgChange = (event) => {
    const updatedValue = event.target.value;
    setTcgValue(updatedValue);
    if (purchaseValue) {
      setGainValue(updatedValue - purchaseValue || '');
      console.log(((updatedValue - purchaseValue) / purchaseValue) * 100);

      setSpreadValue(getPriceSpread(updatedValue, purchaseValue) || '');
    }
  };

  const handlePurchaseChange = (event) => {
    const updatedValue = event.target.value;
    setPurchaseValue(updatedValue);
    if (tcgValue) {
      setGainValue(roundTwoDecimals(tcgValue - updatedValue) || '');
      setSpreadValue(getPriceSpread(tcgValue, updatedValue) || '');
    }
  };

  const handleGainChange = (event) => {
    const updatedValue = event.target.value;
    setGainValue(updatedValue);
    if (purchaseValue) {
      const newTcgValue = roundTwoDecimals(
        parseFloat(purchaseValue) + parseFloat(updatedValue)
      );
      setTcgValue(newTcgValue || '');
      setSpreadValue(
        getPriceSpread(newTcgValue, parseFloat(purchaseValue)) || ''
      );
    }
  };

  const handleSpreadChange = (event) => {
    const updatedValue = event.target.value;
    setSpreadValue(updatedValue);
    if (purchaseValue) {
      const newTcgValue = roundTwoDecimals(
        parseFloat(purchaseValue) +
          parseFloat(purchaseValue) * parseFloat(updatedValue / 100)
      );

      setTcgValue(newTcgValue || '');
      setGainValue(
        roundTwoDecimals(newTcgValue - parseFloat(purchaseValue)) || ''
      );
    }
  };

  return (
    <EnhancedContainer className={classes.container} disableGutters>
      <div className={classes.inputContainer}>
        <EnhancedTypography className={classes.typography}>
          TCG Price
        </EnhancedTypography>
        <EnhancedTextfield
          dataTest='quick-calc-tcg'
          type='number'
          value={tcgValue}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.adornment} position='start'>
                {'$'}
              </InputAdornment>
            ),
          }}
          onChange={handleTcgChange}
          className={classes.textField}
        />
      </div>

      <div className={classes.inputContainer}>
        <EnhancedTypography className={classes.typography}>
          Purchase Price
        </EnhancedTypography>
        <EnhancedTextfield
          dataTest='quick-calc-purchase'
          type='number'
          value={purchaseValue}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.adornment} position='start'>
                {'$'}
              </InputAdornment>
            ),
          }}
          onChange={handlePurchaseChange}
          className={classes.textField}
        />
      </div>

      <div className={classes.inputContainer}>
        <EnhancedTypography className={classes.typography}>
          Gain
        </EnhancedTypography>
        <EnhancedTextfield
          dataTest='quick-calc-gain'
          type='number'
          value={gainValue}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.adornment} position='start'>
                {'$'}
              </InputAdornment>
            ),
          }}
          onChange={handleGainChange}
          className={classes.textField}
        />
      </div>

      <div className={classes.inputContainer}>
        <EnhancedTypography className={classes.typography}>
          Spread
        </EnhancedTypography>

        <EnhancedTextfield
          dataTest='quick-calc-spread'
          type='number'
          value={spreadValue}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.adornment} position='start'>
                {'%'}
              </InputAdornment>
            ),
          }}
          onChange={handleSpreadChange}
          className={classes.textField}
        />
      </div>
    </EnhancedContainer>
  );
};

export default SideBarQuickCalculation;
