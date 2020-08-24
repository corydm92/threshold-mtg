import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  tcgLow,
  tcgMid,
  tcgHigh,
  tcgMarket,
} from '../constants/tcgPriceCategories';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  formControl: {
    color: theme.palette.text.primary,
  },
  formLabel: {
    color: theme.palette.text.primary,
    fontSize: '14px',
    marginBottom: '16px',
  },
  formControlLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    marginLeft: '0',
  },
  radio: {
    color: theme.palette.custom.darkGray,
    '&$checked': {
      color: theme.palette.primary.light,
    },
  },
  checked: {},
  body1Text: {
    fontSize: '14px',
  },
  card: {
    // boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.4)',
    boxShadow: 'none',
    border: '1px solid rgba(224, 224, 224, 1)',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SideBar = (props) => {
  // STORE
  const { priceCategory } = { ...props };

  // ACTIONS
  const {
    setPriceCategoryLow,
    setPriceCategoryMid,
    setPriceCategoryHigh,
    setPriceCategoryMarket,
  } = { ...props };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    switch (event.target.value) {
      case tcgLow:
        return setPriceCategoryLow();
      case tcgMid:
        return setPriceCategoryMid();
      case tcgHigh:
        return setPriceCategoryHigh();
      case tcgMarket:
        return setPriceCategoryMarket();
      default:
        break;
    }
  };

  return (
    <div data-test='SideBar'>
      <Card
        name='sideNav'
        className={classes.root}
        classes={{
          root: classes.card,
        }}
      >
        <CardContent
          classes={{
            root: classes.cardContent,
          }}
        >
          <FormControl className={classes.formControl} component='fieldset'>
            <FormLabel className={classes.formLabel} component='legend'>
              TCG Price Categories
            </FormLabel>
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
        </CardContent>
        <CardActions
          classes={{
            root: classes.cardActions,
          }}
          disableSpacing
        >
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default SideBar;
