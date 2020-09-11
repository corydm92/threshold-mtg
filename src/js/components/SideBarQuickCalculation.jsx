import React, { useState, useEffect } from 'react';
import EnhancedTextfield from '../component-library/mui/components/Form/TextField';
import EnhancedContainer from '../component-library/mui/components/Container';
import { getPriceSpread } from '../../utils';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    textField: {
      maxWidth: '17%',
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
      justifyContent: 'space-evenly',
      alignItems: 'center',
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
    setTcgValue(event.target.value);
    if (purchaseValue) {
      setGainValue(tcgValue - purchaseValue);
      setSpreadValue(getPriceSpread(tcgValue, purchaseValue));
    }
  };

  const handlePurchaseChange = (event) => {
    setPurchaseValue(event.target.value);
  };

  const handleGainChange = (event) => {
    setGainValue(event.target.value);
  };

  const handleSpreadChange = (event) => {
    setSpreadValue(event.target.value);
  };

  return (
    <EnhancedContainer className={classes.container} disableGutters>
      <EnhancedTextfield
        dataTest='quick-calc-tcg'
        type='number'
        value={tcgValue}
        onChange={handleTcgChange}
        className={classes.textField}
      />
      {' - '}

      <EnhancedTextfield
        dataTest='quick-calc-purchase'
        type='number'
        value={purchaseValue}
        onChange={handlePurchaseChange}
        className={classes.textField}
      />
      {' = '}

      <EnhancedTextfield
        dataTest='quick-calc-gain'
        type='number'
        value={gainValue}
        onChange={handleGainChange}
        className={classes.textField}
      />
      {' / '}
      <EnhancedTextfield
        dataTest='quick-calc-spread'
        type='number'
        value={spreadValue}
        onChange={handleSpreadChange}
        className={classes.textField}
      />
    </EnhancedContainer>
  );
};

export default SideBarQuickCalculation;
