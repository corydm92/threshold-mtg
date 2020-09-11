import React, { useState } from 'react';
import CardsTable from './CardsTable';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';
import EnhancedToolbar from '../component-library/mui/components/Toolbar';
import TableDisplayIcons from './TableDisplayIcons';
import { listDisplay } from '../constants/tableDisplayIcons';

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
    </div>
  );
};

export default CardsView;
