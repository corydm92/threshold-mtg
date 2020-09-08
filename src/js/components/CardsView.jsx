import React, { useState } from 'react';
import CardsTable from './CardsTable';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';
import EnhancedToolbar from '../component-library/mui/components/Toolbar';
import TableDisplayIcons from './TableDisplayIcons';
import { listDisplay } from '../constants/tableDisplayIcons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  // Below is HeightOfToolbar * 2 (two toolbars, the header and the table toolbar) + 8 (8px margin at top of page)
  const scrollSpace =
    theme.mixins.toolbar['@media (min-width:600px)'].minHeight * 2 + 8;

  return {
    root: {},
    listView: {
      maxHeight: `calc(100vh - ${scrollSpace}px)`,
      overflow: 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  };
});

const CardsView = (props) => {
  const classes = useStyles();

  const {
    // STORE
    cards,
    priceCategory,
    isLoadingCards,
    cardNamesAndSets,
    filterValues,

    // ACTIONS
    setPriceCategoryLow,
    setPriceCategoryMid,
    setPriceCategoryHigh,
    setPriceCategoryMarket,
    setFilterOptions,
    clearFilterOptions,
  } = {
    ...props,
  };

  const [activeDisplay, setActiveDisplay] = useState(listDisplay);

  const handleDisplayChange = (display) => {
    setActiveDisplay(display);
  };

  return (
    <div data-test='cardsView'>
      <EnhancedToolbar>
        <Grid container>
          <Grid item xs={10}>
            {/* Left Aligned Items Here */}
          </Grid>
          <Grid item xs={2}>
            <TableDisplayIcons
              onClick={handleDisplayChange}
              activeDisplay={activeDisplay}
            />
          </Grid>
        </Grid>
      </EnhancedToolbar>
      <Grid spacing={2} container>
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
          />
        </Grid>
        <Grid className={classes.listView} item xs={10}>
          <CardsTable
            cards={cards}
            isLoadingCards={isLoadingCards}
            priceCategory={priceCategory}
            activeDisplay={activeDisplay}
            filterValues={filterValues}
            setFilterOptions={setFilterOptions}
            clearFilterOptions={clearFilterOptions}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CardsView;
