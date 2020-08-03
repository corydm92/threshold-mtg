import { createSelector } from 'reselect';

const getCard = (state) => state.cardReducer;
const getSpecPrices = (state) => state.specPricesReducer;
const getTcgPrices = (state) => state.tcgPricesReducer;

const specPricesSelector =
  ([getCard, getSpecPrices],
  (card, specPrices) => {
    card.specPrices.map((specPriceId) => {
      return {
        // Select parts from specPrices object here
        ...specPrices[specPriceId],
      };
    });
  });
