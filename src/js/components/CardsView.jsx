import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
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
        <Grid item xs={10}>
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
