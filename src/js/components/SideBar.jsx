import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SideBarFilterForm from './SideBarFilterForm';
import SideBarPriceRadios from './SideBarPriceRadios';
import SideBarQuickCalculation from './SideBarQuickCalculation';
import EnhancedTooltip from '../component-library/mui/components/Tooltip';

import {
  tcgLow,
  tcgMid,
  tcgHigh,
  tcgMarket,
} from '../constants/tcgPriceCategories';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 345,
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'center',
      padding: 0,
      // Gives small amount of padding when arrow is the last element in card
      paddingBottom: (props) => !props.expanded && theme.spacing(1),
    },
    expand: {
      transform: 'rotate(0deg)',
      justifyContent: 'center',
      alignItems: 'center',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    formLabel: {
      color: theme.palette.text.primary,
      textAlign: 'center',
      fontSize: theme.typography.fontSize,
      margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
      '&:nth-child(2)': {
        marginTop: theme.spacing(2),
      },
      fontWeight: theme.typography.fontWeightBold,
      '& .Mui-focused': {
        display: 'none',
      },
    },
    body1Text: {
      fontSize: theme.typography.fontSize,
    },
    card: {
      boxShadow: 'none',
      border: '1px solid rgba(224, 224, 224, 1)',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      paddingTop: 0,
      paddingBottom: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
    filterCardContent: {
      paddingTop: 0,
    },
  };
});

const SideBar = (props) => {
  const {
    // STORE
    priceCategory,
    cardNamesAndSets,
    filterValues,
    priceCalc,

    // ACTIONS
    setPriceCategoryLow,
    setPriceCategoryMid,
    setPriceCategoryHigh,
    setPriceCategoryMarket,
    setFilterOptions,
    clearFilterOptions,
  } = { ...props };

  console.log(priceCategory);

  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles({ expanded });

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

  const getLabel = () => {
    return expanded ? 'Filter Options' : 'TCG Price Categories';
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
        <FormLabel className={classes.formLabel} component='legend'>
          {getLabel()}
        </FormLabel>
        <Collapse in={!expanded} timeout='auto'>
          <CardContent className={classes.cardContent}>
            <SideBarPriceRadios
              priceCategory={priceCategory}
              handleChange={handleChange}
            />
            <EnhancedTooltip
              title='TCG Price - Purchase Price = Gain / Spread'
              placement='bottom'
              arrow
            >
              <FormLabel className={classes.formLabel} component='legend'>
                Quick Calculation
              </FormLabel>
            </EnhancedTooltip>
            <SideBarQuickCalculation
              priceCategory={priceCategory}
              priceCalc={priceCalc}
            />
          </CardContent>
        </Collapse>
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
        <Collapse in={expanded}>
          <CardContent className={classes.filterCardContent}>
            <SideBarFilterForm
              cardNamesAndSets={cardNamesAndSets}
              priceCategory={priceCategory}
              setFilterOptions={setFilterOptions}
              clearFilterOptions={clearFilterOptions}
              filterValues={filterValues}
            />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default SideBar;
