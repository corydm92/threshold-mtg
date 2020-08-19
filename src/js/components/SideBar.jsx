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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
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
  },
  formControlLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    marginLeft: '0',
  },
  radio: {
    color: theme.palette.primary.light,
    '&$checked': {
      color: theme.palette.primary.light,
    },
  },
  checked: {},
  body1Text: {
    fontSize: '14px',
  },
  card: {
    boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.4)',
  },
}));

const SideBar = (props) => {
  const { priceCategory } = { ...props };

  console.log(priceCategory);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      name='sideNav'
      className={classes.root}
      classes={{
        root: classes.card,
      }}
    >
      <CardContent>
        <FormControl className={classes.formControl} component='fieldset'>
          <FormLabel className={classes.formLabel} component='legend'>
            TCG Price Categories
          </FormLabel>
          <br />
          <RadioGroup
            aria-label='tcgPriceCategories'
            name='tcgPriceCategories'
            value={priceCategory}
            // onChange={handleChange}
          >
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
                />
              }
              label='TCG High'
              labelPlacement='start'
            />
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
                />
              }
              label='TCG Market'
              labelPlacement='start'
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions disableSpacing>
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
  );
};

export default SideBar;
