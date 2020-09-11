import React, { useState } from 'react';
import EnhancedTextfield from '../component-library/mui/components/Form/TextField';
import EnhancedContainer from '../component-library/mui/components/Container';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    textField: {
      maxWidth: '17%',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  };
});

const SideBarQuickCalculation = (props) => {
  const { tcgPrice, purchasePrice, gain, spread } = { ...props };

  const classes = useStyles();

  return (
    <EnhancedContainer className={classes.container} disableGutters>
      TCG Price - Purchase Price = Gain {'>'} Spread
      <EnhancedTextfield className={classes.textField} /> -{' '}
      <EnhancedTextfield className={classes.textField} /> ={' '}
      <EnhancedTextfield className={classes.textField} /> /{' '}
      <EnhancedTextfield className={classes.textField} />
    </EnhancedContainer>
  );
};

export default SideBarQuickCalculation;
