import { createSelector } from 'reselect';

const getCard = (state) => state.cardReducer;
const getSpecPrices = (state) => state.specPricesReducer;
const getTcgPrice = (state) => state.tcgPricesReducer;

const specPricesSelector = createSelector(
  [getCard, getSpecPrices],
  (card, specPrices) => {
    try {
      return card.spec_prices.map((specPriceId) => {
        return {
          // Select parts from specPrices object here
          ...specPrices[specPriceId],
        };
      });
    } catch {
      return [];
    }
  }
);

const tcgPriceSelector = createSelector(
  [getCard, getTcgPrice],
  (card, tcgPrices) => {
    try {
      return {
        // Select parts from tcgPrice object here
        ...tcgPrices[card.tcg_price],
      };
    } catch {
      return {};
    }
  }
);

export const cardSelector = createSelector(
  [getCard, specPricesSelector, tcgPriceSelector],
  (card, specPrices, tcgPrice) => {
    // Do validation on Card schema

    return {
      // Select parts from card object here
      ...card,
      spec_prices: specPrices,
      tcg_price: tcgPrice,
    };
  }
);
