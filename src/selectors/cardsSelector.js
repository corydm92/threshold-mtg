import { createSelector } from 'reselect';

const getCards = (state) => state.cardsReducer.entities.cards;
const getCardsResults = (state) => state.cardsReducer.result;

export const cardsSelector = createSelector(
  [getCards, getCardsResults],
  (cards, results) => {
    return results.map((result) => {
      // Bundle relevant data into an out obj and return here
      return { ...cards[result] };
    });
  }
);
