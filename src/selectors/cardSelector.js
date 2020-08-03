import { createSelector } from 'reselect';

const getCard = (state) => state.cardReducer;
const getSpecPrices = (state) => state.specPricesReducer;
const getTcgPrices = (state) => state.tcgPricesReducer;

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

export const cardSelector = createSelector(
  [getCard, specPricesSelector],
  (card, specPrices) => {
    // Do validation on Card schema

    return {
      ...card,
      spec_prices: specPrices,
    };
  }
);
