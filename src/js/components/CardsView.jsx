import React, { useState } from 'react';
import CardsTable from './CardsTable';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';
import CardsTableToolbar from './CardsTableToolbar';
import { listDisplay } from '../constants/tableDisplayIcons';
import { makeStyles } from '@material-ui/styles';
import EnhancedContainer from '../component-library/mui/components/Container';

const useStyles = makeStyles((theme) => {
  return {
    grid: {
      flexWrap: 'nowrap',
    },
    mobileTable: {
      [theme.breakpoints.down('md')]: {
        display: 'block',
      },
      // down() works as a "greater than"
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    desktopTable: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      // down() works as a "greater than"
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  };
});

const CardsView = (props) => {
  const {
    // STORE
    cards,
    priceCategory,
    isLoadingCards,
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
    setPriceCalc,
  } = {
    ...props,
  };

  const classes = useStyles();

  const [activeDisplay, setActiveDisplay] = useState(listDisplay);

  const handleDisplayChange = (display) => {
    setActiveDisplay(display);
  };

  return (
    <div data-test='cardsView'>
      {/* MOBILE TABLE */}

      <EnhancedContainer
        className={classes.mobileTable}
        disableGutters
        dataTest='mobile-table-container'
      >
        Mobile Table
      </EnhancedContainer>

      {/* DESKTOP TABLE */}

      <EnhancedContainer
        className={classes.desktopTable}
        disableGutters
        dataTest='desktop-table-container'
      >
        <CardsTableToolbar
          handleDisplayChange={handleDisplayChange}
          activeDisplay={activeDisplay}
        />
        <Grid container className={classes.grid}>
          <Grid item xs={2}>
            <SideBar
              priceCategory={priceCategory}
              setPriceCategoryLow={setPriceCategoryLow}
              setPriceCategoryMid={setPriceCategoryMid}
              setPriceCategoryHigh={setPriceCategoryHigh}
              setPriceCategoryMarket={setPriceCategoryMarket}
              cardNamesAndSets={cardNamesAndSets}
              setFilterOptions={setFilterOptions}
              clearFilterOptions={clearFilterOptions}
              filterValues={filterValues}
              priceCalc={priceCalc}
            />
          </Grid>
          <Grid item xs={10}>
            <CardsTable
              cards={cards}
              isLoadingCards={isLoadingCards}
              priceCategory={priceCategory}
              activeDisplay={activeDisplay}
              filterValues={filterValues}
              setFilterOptions={setFilterOptions}
              clearFilterOptions={clearFilterOptions}
              setPriceCalc={setPriceCalc}
            />
          </Grid>
        </Grid>
      </EnhancedContainer>
    </div>
  );
};

export default CardsView;
