import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import CardsTable from './CardsTable';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';

const CardsView = (props) => {
  const {
    // STORE
    cards,
    priceCategory,
    isLoadingCards,

    // ACTIONS
    fetchCards,
    isLoadingCardsFalse,
    setPriceCategoryLow,
    setPriceCategoryMid,
    setPriceCategoryHigh,
    setPriceCategoryMarket,
  } = {
    ...props,
  };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    if (!isEmpty(cards) && isLoadingCards) {
      isLoadingCardsFalse();
    }
  }, [cards, isLoadingCards, isLoadingCardsFalse]);

  return (
    <div data-test='cardsView'>
      <Grid spacing={2} container>
        <Grid item xs={2}>
          <SideBar
            priceCategory={priceCategory}
            setPriceCategoryLow={setPriceCategoryLow}
            setPriceCategoryMid={setPriceCategoryMid}
            setPriceCategoryHigh={setPriceCategoryHigh}
            setPriceCategoryMarket={setPriceCategoryMarket}
          />
        </Grid>
        <Grid item xs={10}>
          <CardsTable
            cards={cards}
            isLoadingCards={isLoadingCards}
            priceCategory={priceCategory}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CardsView;
