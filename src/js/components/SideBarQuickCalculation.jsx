import React, { useState, useEffect } from 'react';
import EnhancedTextfield from '../component-library/mui/components/Form/TextField';
import EnhancedContainer from '../component-library/mui/components/Container';
import EnhancedTypography from '../component-library/mui/components/Typography';
import { getPriceSpread, roundTwoDecimals } from '../../utils';
import { makeStyles } from '@material-ui/styles';
import EnhancedInputAdornment from '../component-library/mui/components/Form/InputAdornment';
import { getPriceCategory } from '../../utils';

const useStyles = makeStyles((theme) => {
  return {
    textField: {
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
      width: '100%',
      '& .MuiInput-input': {
        textAlign: 'right',
        paddingRight: theme.spacing(1),
      },
    },
    typography: {
      maxWidth: '40%',
    },
    cardName: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: theme.spacing(2),
    },
  };
});

const SideBarQuickCalculation = (props) => {
  const classes = useStyles();
  const {
    priceCategory,
    priceCalc: { tcgPrice, purchasePrice, gain, spread, cardName },
  } = {
    ...props,
  };

  const [tcgValue, setTcgValue] = useState(tcgPrice); // Fixes switching between controlled / uncontrolled
  const [purchaseValue, setPurchaseValue] = useState(purchasePrice);
  const [gainValue, setGainValue] = useState(gain);
  const [spreadValue, setSpreadValue] = useState(spread);
  const [cardNameValue, setCardNameValue] = useState(cardName);

  useEffect(() => {
    setTcgValue(tcgPrice);
    setPurchaseValue(purchasePrice);
    setGainValue(gain);
    setSpreadValue(spread);
    setCardNameValue(cardName);
  }, [tcgPrice, purchasePrice, gain, spread, cardName]);

  const handleTcgChange = (event) => {
    const updatedValue = event.target.value;
    setTcgValue(updatedValue);
    if (purchaseValue) {
      setGainValue(updatedValue - purchaseValue || '');
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
        <EnhancedTextfield
          dataTest='quick-calc-tcg'
          type='number'
          value={tcgValue}
          label={getPriceCategory(priceCategory)}
          fullWidth
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
          onChange={handleTcgChange}
          className={classes.textField}
        />
      </div>

      <div className={classes.inputContainer}>
        <EnhancedTextfield
          dataTest='quick-calc-purchase'
          type='number'
          value={purchaseValue}
          label={'Purchase Price'}
          fullWidth
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
          onChange={handlePurchaseChange}
          className={classes.textField}
        />
      </div>

      <div className={classes.inputContainer}>
        <EnhancedTextfield
          dataTest='quick-calc-gain'
          type='number'
          value={gainValue}
          label={'Gain / Loss'}
          fullWidth
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
          onChange={handleGainChange}
          className={classes.textField}
        />
      </div>

      <div className={classes.inputContainer}>
        <EnhancedTextfield
          dataTest='quick-calc-spread'
          type='number'
          value={spreadValue}
          label={'Spread'}
          fullWidth
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
          onChange={handleSpreadChange}
          className={classes.textField}
        />
      </div>
      <div className={classes.cardName}>
        <EnhancedTypography bold>{cardNameValue}</EnhancedTypography>
      </div>
    </EnhancedContainer>
  );
};

export default SideBarQuickCalculation;
