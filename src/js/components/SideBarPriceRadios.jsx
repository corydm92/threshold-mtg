import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import {
  tcgLow,
  tcgMid,
  tcgHigh,
  tcgMarket,
} from '../constants/tcgPriceCategories';

const useStyles = makeStyles((theme) => {
  return {
    formControl: {
      color: theme.palette.text.primary,
      width: '100%',
      '& .MuiFormLabel-root.Mui-focused': {
        color: theme.palette.text.primary,
      },
    },
    formControlLabel: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: theme.typography.fontSize,
      marginLeft: '0',
    },
    radio: {
      color: theme.palette.custom.darkGray,
      '&$checked': {
        color: theme.palette.primary.light,
      },
    },
    checked: {},
  };
});

const SideBarPriceRadios = (props) => {
  const { priceCategory, handleChange } = { ...props };

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} component='fieldset'>
      <RadioGroup
        aria-label='tcgPriceCategories'
        name='tcgPriceCategories'
        value={priceCategory}
        onChange={(event) => handleChange(event)}
        data-test='radio-group'
      >
        <FormControlLabel
          value={tcgMarket}
          classes={{
            label: classes.formControlLabel,
            root: classes.formControlLabel,
          }}
          control={
            <Radio
              classes={{
                root: classes.radio,
                checked: classes.checked,
              }}
              data-test='tcg-market-radio'
            />
          }
          label='TCG Market'
          labelPlacement='start'
        />
        <FormControlLabel
          value={tcgLow}
          classes={{
            label: classes.formControlLabel,
            root: classes.formControlLabel,
          }}
          control={
            <Radio
              classes={{
                root: classes.radio,
                checked: classes.checked,
              }}
              data-test='tcg-low-radio'
            />
          }
          label='TCG Low'
          labelPlacement='start'
        />
        <FormControlLabel
          value={tcgMid}
          classes={{
            label: classes.formControlLabel,
            root: classes.formControlLabel,
          }}
          control={
            <Radio
              classes={{
                root: classes.radio,
                checked: classes.checked,
              }}
              data-test='tcg-mid-radio'
            />
          }
          label='TCG Mid'
          labelPlacement='start'
        />
        <FormControlLabel
          value={tcgHigh}
          classes={{
            label: classes.formControlLabel,
            root: classes.formControlLabel,
          }}
          control={
            <Radio
              classes={{
                root: classes.radio,
                checked: classes.checked,
              }}
              data-test='tcg-high-radio'
            />
          }
          label='TCG High'
          labelPlacement='start'
        />
      </RadioGroup>
    </FormControl>
  );
};

export default SideBarPriceRadios;
